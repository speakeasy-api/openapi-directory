import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewSyncServiceSyncMapSyncMapPermission extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Twilio Account.
     */
    accountSid?: string;
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity?: string;
    /**
     * Boolean flag specifying whether the identity can delete the Sync Map.
     */
    manage?: boolean;
    /**
     * The unique SID identifier of the Sync Map to which the Permission applies.
     */
    mapSid?: string;
    /**
     * Boolean flag specifying whether the identity can read the Sync Map and its Items.
     */
    read?: boolean;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid?: string;
    /**
     * Contains an absolute URL for this Sync Map Permission.
     */
    url?: string;
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
     */
    write?: boolean;
}
