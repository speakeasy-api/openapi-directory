package openapisdk.models.shared;


public enum OsPolicyResourceConfigStepTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    VALIDATION("VALIDATION"),
    DESIRED_STATE_CHECK("DESIRED_STATE_CHECK"),
    DESIRED_STATE_ENFORCEMENT("DESIRED_STATE_ENFORCEMENT"),
    DESIRED_STATE_CHECK_POST_ENFORCEMENT("DESIRED_STATE_CHECK_POST_ENFORCEMENT");

    public final String value;

    private OsPolicyResourceConfigStepTypeEnum(String value) {
        this.value = value;
    }
}
