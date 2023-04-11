import { SpeakeasyBase } from "../../../internal/utils";
import { BrandRegistrationsEnumBrandFeedbackEnum } from "./brandregistrationsenumbrandfeedbackenum";
import { BrandRegistrationsEnumIdentityStatusEnum } from "./brandregistrationsenumidentitystatusenum";
import { BrandRegistrationsEnumStatusEnum } from "./brandregistrationsenumstatusenum";
/**
 * Created
 */
export declare class MessagingV1BrandRegistrations extends SpeakeasyBase {
    /**
     * A2P Messaging Profile Bundle BundleSid.
     */
    a2pProfileBundleSid?: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand Registration resource.
     */
    accountSid?: string;
    /**
     * Feedback on how to improve brand score
     */
    brandFeedback?: BrandRegistrationsEnumBrandFeedbackEnum[];
    /**
     * The secondary vetting score if it was done. Otherwise, it will be the brand score if it's returned from TCR. It may be null if no score is available.
     */
    brandScore?: number;
    /**
     * Type of brand. One of: "STANDARD", "STARTER". STARTER is for the low volume, STARTER campaign use case. There can only be one STARTER campaign created per STARTER brand. STANDARD is for all other campaign use cases. Multiple campaign use cases can be created per STANDARD brand.
     */
    brandType?: string;
    /**
     * A2P Messaging Profile Bundle BundleSid.
     */
    customerProfileBundleSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * A reason why brand registration has failed. Only applicable when status is FAILED.
     */
    failureReason?: string;
    /**
     * Identified as a government entity
     */
    governmentEntity?: boolean;
    identityStatus?: BrandRegistrationsEnumIdentityStatusEnum;
    links?: Record<string, any>;
    /**
     * A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
     */
    mock?: boolean;
    /**
     * Publicly traded company identified in the Russell 3000 Index
     */
    russell3000?: boolean;
    /**
     * The unique string to identify Brand Registration.
     */
    sid?: string;
    /**
     * A flag to disable automatic secondary vetting for brands which it would otherwise be done.
     */
    skipAutomaticSecVet?: boolean;
    status?: BrandRegistrationsEnumStatusEnum;
    /**
     * Nonprofit organization tax-exempt status per section 501 of the U.S. tax code.
     */
    taxExemptStatus?: string;
    /**
     * Campaign Registry (TCR) Brand ID. Assigned only after successful brand registration.
     */
    tcrId?: string;
    /**
     * The absolute URL of the Brand Registration resource.
     */
    url?: string;
}
