package openapisdk.models.shared;


public enum AttributeMetadataValueTypeEnum {
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"),
    BOOL("BOOL"),
    ENUM_("ENUM"),
    URL("URL"),
    REPEATED_ENUM("REPEATED_ENUM");

    public final String value;

    private AttributeMetadataValueTypeEnum(String value) {
        this.value = value;
    }
}
