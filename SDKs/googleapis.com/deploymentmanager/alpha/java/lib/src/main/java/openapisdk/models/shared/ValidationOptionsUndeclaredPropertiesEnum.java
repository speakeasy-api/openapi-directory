package openapisdk.models.shared;


public enum ValidationOptionsUndeclaredPropertiesEnum {
    UNKNOWN("UNKNOWN"),
    INCLUDE("INCLUDE"),
    IGNORE("IGNORE"),
    INCLUDE_WITH_WARNINGS("INCLUDE_WITH_WARNINGS"),
    IGNORE_WITH_WARNINGS("IGNORE_WITH_WARNINGS"),
    FAIL("FAIL");

    public final String value;

    private ValidationOptionsUndeclaredPropertiesEnum(String value) {
        this.value = value;
    }
}
