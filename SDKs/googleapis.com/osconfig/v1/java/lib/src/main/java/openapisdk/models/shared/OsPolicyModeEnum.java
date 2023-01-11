package openapisdk.models.shared;


public enum OsPolicyModeEnum {
    MODE_UNSPECIFIED("MODE_UNSPECIFIED"),
    VALIDATION("VALIDATION"),
    ENFORCEMENT("ENFORCEMENT");

    public final String value;

    private OsPolicyModeEnum(String value) {
        this.value = value;
    }
}
