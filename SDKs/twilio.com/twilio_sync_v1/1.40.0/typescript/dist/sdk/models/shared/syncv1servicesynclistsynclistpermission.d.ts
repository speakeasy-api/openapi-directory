import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SyncV1ServiceSyncListSyncListPermission extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync List Permission resource.
     */
    accountSid?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User within the Service to an FPA token.
     */
    identity?: string;
    /**
     * The SID of the Sync List to which the Permission applies.
     */
    listSid?: string;
    /**
     * Whether the identity can delete the Sync List.
     */
    manage?: boolean;
    /**
     * Whether the identity can read the Sync List and its Items.
     */
    read?: boolean;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The absolute URL of the Sync List Permission resource.
     */
    url?: string;
    /**
     * Whether the identity can create, update, and delete Items in the Sync List.
     */
    write?: boolean;
}
