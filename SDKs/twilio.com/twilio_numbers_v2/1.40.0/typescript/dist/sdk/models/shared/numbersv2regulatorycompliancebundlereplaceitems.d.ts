import { SpeakeasyBase } from "../../../internal/utils";
import { ReplaceItemsEnumStatusEnum } from "./replaceitemsenumstatusenum";
/**
 * Created
 */
export declare class NumbersV2RegulatoryComplianceBundleReplaceItems extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
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
     * The email address that will receive updates when the Bundle resource changes status.
     */
    email?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The unique string of a regulation that is associated to the Bundle resource.
     */
    regulationSid?: string;
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    sid?: string;
    status?: ReplaceItemsEnumStatusEnum;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
    /**
     * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
     */
    validUntil?: Date;
}
