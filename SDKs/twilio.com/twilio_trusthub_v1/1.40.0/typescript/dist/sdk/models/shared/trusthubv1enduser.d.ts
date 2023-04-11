import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TrusthubV1EndUser extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the End User resource.
     */
    accountSid?: string;
    /**
     * The set of parameters that are the attributes of the End Users resource which are listed in the End User Types.
     */
    attributes?: any;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The unique string created by Twilio to identify the End User resource.
     */
    sid?: string;
    /**
     * The type of end user of the Bundle resource - can be `individual` or `business`.
     */
    type?: string;
    /**
     * The absolute URL of the End User resource.
     */
    url?: string;
}
