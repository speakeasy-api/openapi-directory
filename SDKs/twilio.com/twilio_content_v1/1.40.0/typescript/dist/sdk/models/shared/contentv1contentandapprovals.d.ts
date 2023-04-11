import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentV1ContentAndApprovals extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
     */
    accountSid?: string;
    /**
     * The submitted information and approval request status of the Content resource.
     */
    approvalRequests?: any;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * A string name used to describe the Content resource. Not visible to the end recipient.
     */
    friendlyName?: string;
    /**
     * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
     */
    language?: string;
    /**
     * The unique string that that we created to identify the Content resource.
     */
    sid?: string;
    /**
     * The [Content types](https://www.twilio.com/docs/content-api/content-types-overview) (e.g. twilio/text) for this Content resource.
     */
    types?: any;
    /**
     * Defines the default placeholder values for variables included in the Content resource. e.g. {"1": "Customer_Name"}.
     */
    variables?: any;
}
