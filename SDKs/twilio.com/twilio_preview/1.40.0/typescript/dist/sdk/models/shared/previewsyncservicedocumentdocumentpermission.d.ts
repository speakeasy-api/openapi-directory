import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewSyncServiceDocumentDocumentPermission extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Twilio Account.
     */
    accountSid?: string;
    /**
     * The unique SID identifier of the Sync Document to which the Permission applies.
     */
    documentSid?: string;
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity?: string;
    /**
     * Boolean flag specifying whether the identity can delete the Sync Document.
     */
    manage?: boolean;
    /**
     * Boolean flag specifying whether the identity can read the Sync Document.
     */
    read?: boolean;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid?: string;
    /**
     * Contains an absolute URL for this Sync Document Permission.
     */
    url?: string;
    /**
     * Boolean flag specifying whether the identity can update the Sync Document.
     */
    write?: boolean;
}
