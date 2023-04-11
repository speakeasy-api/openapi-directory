import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SyncV1ServiceSyncStream extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Stream resource.
     */
    accountSid?: string;
    /**
     * The identity of the Stream's creator. If the Stream is created from the client SDK, the value matches the Access Token's `identity` field. If the Stream was created from the REST API, the value is 'system'.
     */
    createdBy?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Message Stream expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Message Stream does not expire, this value is `null`. The Stream might not be deleted immediately after it expires.
     */
    dateExpires?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The URLs of the Stream's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Sync Stream resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Message Stream resource.
     */
    url?: string;
}
