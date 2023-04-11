import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum {
    ClassificationReasonUnspecified = "CLASSIFICATION_REASON_UNSPECIFIED",
    Automation = "AUTOMATION",
    UnexpectedEnvironment = "UNEXPECTED_ENVIRONMENT",
    TooMuchTraffic = "TOO_MUCH_TRAFFIC",
    UnexpectedUsagePatterns = "UNEXPECTED_USAGE_PATTERNS",
    LowConfidenceScore = "LOW_CONFIDENCE_SCORE",
    SuspectedCarding = "SUSPECTED_CARDING",
    SuspectedChargeback = "SUSPECTED_CHARGEBACK"
}
/**
 * Risk analysis result for an event.
 */
export declare class GoogleCloudRecaptchaenterpriseV1RiskAnalysis extends SpeakeasyBase {
    /**
     * Reasons contributing to the risk analysis verdict.
     */
    reasons?: GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum[];
    /**
     * Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic).
     */
    score?: number;
}
