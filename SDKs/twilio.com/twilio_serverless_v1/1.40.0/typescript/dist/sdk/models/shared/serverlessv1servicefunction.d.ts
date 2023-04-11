import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ServerlessV1ServiceFunction extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the Function resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Function resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the Function resource. It can be a maximum of 255 characters.
     */
    friendlyName?: string;
    /**
     * The URLs of nested resources of the Function resource.
     */
    links?: Record<string, any>;
    /**
     * The SID of the Service that the Function resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Function resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Function resource.
     */
    url?: string;
}
