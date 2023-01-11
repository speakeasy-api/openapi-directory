package openapisdk.models.shared;


public enum AttributeValueTypeEnum {
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"),
    BOOL("BOOL"),
    ENUM_("ENUM"),
    URL("URL"),
    REPEATED_ENUM("REPEATED_ENUM");

    public final String value;

    private AttributeValueTypeEnum(String value) {
        this.value = value;
    }
}
