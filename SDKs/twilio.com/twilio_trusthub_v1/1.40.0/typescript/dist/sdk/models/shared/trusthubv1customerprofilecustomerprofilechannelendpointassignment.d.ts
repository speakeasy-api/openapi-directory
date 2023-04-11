import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Item Assignment resource.
     */
    accountSid?: string;
    /**
     * The SID of an channel endpoint
     */
    channelEndpointSid?: string;
    /**
     * The type of channel endpoint. eg: phone-number
     */
    channelEndpointType?: string;
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The unique string that we created to identify the Item Assignment resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Identity resource.
     */
    url?: string;
}
