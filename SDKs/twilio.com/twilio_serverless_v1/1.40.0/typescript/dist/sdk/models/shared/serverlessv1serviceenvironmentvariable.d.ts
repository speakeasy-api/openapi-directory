import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ServerlessV1ServiceEnvironmentVariable extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Variable resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the Variable resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Variable resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Environment in which the Variable exists.
     */
    environmentSid?: string;
    /**
     * A string by which the Variable resource can be referenced.
     */
    key?: string;
    /**
     * The SID of the Service that the Variable resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Variable resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Variable resource.
     */
    url?: string;
    /**
     * A string that contains the actual value of the Variable.
     */
    value?: string;
}
