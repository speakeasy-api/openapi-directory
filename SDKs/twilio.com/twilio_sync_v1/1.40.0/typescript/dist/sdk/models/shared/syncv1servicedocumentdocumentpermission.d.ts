import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SyncV1ServiceDocumentDocumentPermission extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document Permission resource.
     */
    accountSid?: string;
    /**
     * The SID of the Sync Document to which the Document Permission applies.
     */
    documentSid?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User within the Service to an FPA token.
     */
    identity?: string;
    /**
     * Whether the identity can delete the Sync Document.
     */
    manage?: boolean;
    /**
     * Whether the identity can read the Sync Document.
     */
    read?: boolean;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The absolute URL of the Sync Document Permission resource.
     */
    url?: string;
    /**
     * Whether the identity can update the Sync Document.
     */
    write?: boolean;
}
