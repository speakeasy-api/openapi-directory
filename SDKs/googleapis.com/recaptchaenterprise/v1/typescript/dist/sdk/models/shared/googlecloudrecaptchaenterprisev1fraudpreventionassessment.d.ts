import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict } from "./googlecloudrecaptchaenterprisev1fraudpreventionassessmentcardtestingverdict";
import { GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict } from "./googlecloudrecaptchaenterprisev1fraudpreventionassessmentstoleninstrumentverdict";
/**
 * Assessment for Fraud Prevention.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment extends SpeakeasyBase {
    /**
     * Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.
     */
    cardTestingVerdict?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict;
    /**
     * Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.
     */
    stolenInstrumentVerdict?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict;
    /**
     * Probability (0-1) of this transaction being fraudulent. Summarizes the combined risk of attack vectors below.
     */
    transactionRisk?: number;
}
