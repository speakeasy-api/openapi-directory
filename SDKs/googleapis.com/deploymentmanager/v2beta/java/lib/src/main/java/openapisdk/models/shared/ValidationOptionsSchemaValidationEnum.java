package openapisdk.models.shared;


public enum ValidationOptionsSchemaValidationEnum {
    UNKNOWN("UNKNOWN"),
    IGNORE("IGNORE"),
    IGNORE_WITH_WARNINGS("IGNORE_WITH_WARNINGS"),
    FAIL("FAIL");

    public final String value;

    private ValidationOptionsSchemaValidationEnum(String value) {
        this.value = value;
    }
}
