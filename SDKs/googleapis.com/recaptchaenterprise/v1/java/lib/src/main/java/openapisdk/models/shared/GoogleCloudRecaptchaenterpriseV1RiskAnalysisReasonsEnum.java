package openapisdk.models.shared;


public enum GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum {
    CLASSIFICATION_REASON_UNSPECIFIED("CLASSIFICATION_REASON_UNSPECIFIED"),
    AUTOMATION("AUTOMATION"),
    UNEXPECTED_ENVIRONMENT("UNEXPECTED_ENVIRONMENT"),
    TOO_MUCH_TRAFFIC("TOO_MUCH_TRAFFIC"),
    UNEXPECTED_USAGE_PATTERNS("UNEXPECTED_USAGE_PATTERNS"),
    LOW_CONFIDENCE_SCORE("LOW_CONFIDENCE_SCORE");

    public final String value;

    private GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum(String value) {
        this.value = value;
    }
}
