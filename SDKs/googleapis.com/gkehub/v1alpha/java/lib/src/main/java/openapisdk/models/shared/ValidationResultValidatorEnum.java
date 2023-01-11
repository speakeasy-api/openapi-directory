package openapisdk.models.shared;


public enum ValidationResultValidatorEnum {
    VALIDATOR_TYPE_UNSPECIFIED("VALIDATOR_TYPE_UNSPECIFIED"),
    MEMBERSHIP_ID("MEMBERSHIP_ID"),
    CROSS_PROJECT_PERMISSION("CROSS_PROJECT_PERMISSION");

    public final String value;

    private ValidationResultValidatorEnum(String value) {
        this.value = value;
    }
}
