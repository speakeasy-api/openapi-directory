import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SyncV1ServiceSyncListSyncListItem extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the List Item resource.
     */
    accountSid?: string;
    /**
     * The identity of the List Item's creator. If the item is created from the client SDK, the value matches the Access Token's `identity` field. If the item was created from the REST API, the value is `system`.
     */
    createdBy?: string;
    /**
     * An arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the List Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the List Item does not expire, this value is `null`. The List Item resource might not be deleted immediately after it expires.
     */
    dateExpires?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The automatically generated index of the List Item. The `index` values of the List Items in a Sync List can have gaps in their sequence.
     */
    index?: number;
    /**
     * The SID of the Sync List that contains the List Item.
     */
    listSid?: string;
    /**
     * The current revision of the item, represented as a string.
     */
    revision?: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The absolute URL of the List Item resource.
     */
    url?: string;
}
