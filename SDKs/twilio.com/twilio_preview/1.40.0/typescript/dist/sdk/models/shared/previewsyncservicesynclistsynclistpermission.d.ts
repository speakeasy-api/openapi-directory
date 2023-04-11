import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewSyncServiceSyncListSyncListPermission extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Twilio Account.
     */
    accountSid?: string;
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity?: string;
    /**
     * The unique SID identifier of the Sync List to which the Permission applies.
     */
    listSid?: string;
    /**
     * Boolean flag specifying whether the identity can delete the Sync List.
     */
    manage?: boolean;
    /**
     * Boolean flag specifying whether the identity can read the Sync List and its Items.
     */
    read?: boolean;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid?: string;
    /**
     * Contains an absolute URL for this Sync List Permission.
     */
    url?: string;
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
     */
    write?: boolean;
}
