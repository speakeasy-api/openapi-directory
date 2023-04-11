import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SyncV1ServiceSyncMapSyncMapPermission extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
     */
    accountSid?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User within the Service to an FPA token.
     */
    identity?: string;
    /**
     * Whether the identity can delete the Sync Map.
     */
    manage?: boolean;
    /**
     * The SID of the Sync Map to which the Permission applies.
     */
    mapSid?: string;
    /**
     * Whether the identity can read the Sync Map and its Items.
     */
    read?: boolean;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The absolute URL of the Sync Map Permission resource.
     */
    url?: string;
    /**
     * Whether the identity can create, update, and delete Items in the Sync Map.
     */
    write?: boolean;
}
