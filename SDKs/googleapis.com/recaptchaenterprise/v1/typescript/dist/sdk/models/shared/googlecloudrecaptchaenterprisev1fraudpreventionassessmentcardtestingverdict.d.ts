import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict extends SpeakeasyBase {
    /**
     * Probability (0-1) of this transaction attempt being part of a card testing attack.
     */
    risk?: number;
}
