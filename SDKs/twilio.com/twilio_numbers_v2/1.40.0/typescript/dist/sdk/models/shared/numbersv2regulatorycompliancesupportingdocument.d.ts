import { SpeakeasyBase } from "../../../internal/utils";
import { SupportingDocumentEnumStatusEnum } from "./supportingdocumentenumstatusenum";
/**
 * Created
 */
export declare class NumbersV2RegulatoryComplianceSupportingDocument extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document resource.
     */
    accountSid?: string;
    /**
     * The set of parameters that are the attributes of the Supporting Documents resource which are listed in the Supporting Document Types.
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
     * The failure reason of the Supporting Document Resource.
     */
    failureReason?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The image type uploaded in the Supporting Document container.
     */
    mimeType?: string;
    /**
     * The unique string created by Twilio to identify the Supporting Document resource.
     */
    sid?: string;
    status?: SupportingDocumentEnumStatusEnum;
    /**
     * The type of the Supporting Document.
     */
    type?: string;
    /**
     * The absolute URL of the Supporting Document resource.
     */
    url?: string;
}
