package openapisdk.models.shared;


public enum AdmissionRuleEvaluationModeEnum {
    EVALUATION_MODE_UNSPECIFIED("EVALUATION_MODE_UNSPECIFIED"),
    ALWAYS_ALLOW("ALWAYS_ALLOW"),
    REQUIRE_ATTESTATION("REQUIRE_ATTESTATION"),
    ALWAYS_DENY("ALWAYS_DENY");

    public final String value;

    private AdmissionRuleEvaluationModeEnum(String value) {
        this.value = value;
    }
}
