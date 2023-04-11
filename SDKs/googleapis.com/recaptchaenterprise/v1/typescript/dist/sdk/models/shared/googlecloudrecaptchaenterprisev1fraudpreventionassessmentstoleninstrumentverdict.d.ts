import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict extends SpeakeasyBase {
    /**
     * Probability (0-1) of this transaction being executed with a stolen instrument.
     */
    risk?: number;
}
