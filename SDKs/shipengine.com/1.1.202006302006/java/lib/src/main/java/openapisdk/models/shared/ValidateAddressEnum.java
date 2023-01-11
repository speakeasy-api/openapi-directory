package openapisdk.models.shared;


public enum ValidateAddressEnum {
    NO_VALIDATION("no_validation"),
    VALIDATE_ONLY("validate_only"),
    VALIDATE_AND_CLEAN("validate_and_clean");

    public final String value;

    private ValidateAddressEnum(String value) {
        this.value = value;
    }
}
