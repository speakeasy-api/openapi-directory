import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfileEnumStatusEnum } from "./customerprofileenumstatusenum";
/**
 * Created
 */
export declare class TrusthubV1CustomerProfile extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Customer-Profile resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The email address that will receive updates when the Customer-Profile resource changes status.
     */
    email?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of the Assigned Items of the Customer-Profile resource.
     */
    links?: Record<string, any>;
    /**
     * The unique string of a policy that is associated to the Customer-Profile resource.
     */
    policySid?: string;
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid?: string;
    status?: CustomerProfileEnumStatusEnum;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
    /**
     * The absolute URL of the Customer-Profile resource.
     */
    url?: string;
    /**
     * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
     */
    validUntil?: Date;
}
