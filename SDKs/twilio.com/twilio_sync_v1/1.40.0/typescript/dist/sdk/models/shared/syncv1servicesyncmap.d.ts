import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SyncV1ServiceSyncMap extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map resource.
     */
    accountSid?: string;
    /**
     * The identity of the Sync Map's creator. If the Sync Map is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync Map was created from the REST API, the value is `system`.
     */
    createdBy?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Sync Map expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Map does not expire, this value is `null`. The Sync Map might not be deleted immediately after it expires.
     */
    dateExpires?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The URLs of the Sync Map's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The current revision of the Sync Map, represented as a string.
     */
    revision?: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Sync Map resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Sync Map resource.
     */
    url?: string;
}
