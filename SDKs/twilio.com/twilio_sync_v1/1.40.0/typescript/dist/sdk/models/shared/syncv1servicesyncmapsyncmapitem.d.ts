import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SyncV1ServiceSyncMapSyncMapItem extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Map Item resource.
     */
    accountSid?: string;
    /**
     * The identity of the Map Item's creator. If the Map Item is created from the client SDK, the value matches the Access Token's `identity` field. If the Map Item was created from the REST API, the value is `system`.
     */
    createdBy?: string;
    /**
     * An arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Map Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Map Item does not expire, this value is `null`.  The Map Item might not be deleted immediately after it expires.
     */
    dateExpires?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The unique, user-defined key for the Map Item.
     */
    key?: string;
    /**
     * The SID of the Sync Map that contains the Map Item.
     */
    mapSid?: string;
    /**
     * The current revision of the Map Item, represented as a string.
     */
    revision?: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The absolute URL of the Map Item resource.
     */
    url?: string;
}
