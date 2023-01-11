package openapisdk.models.shared;


public enum ConfigVariableTemplateValueTypeEnum {
    VALUE_TYPE_UNSPECIFIED("VALUE_TYPE_UNSPECIFIED"),
    STRING("STRING"),
    INT("INT"),
    BOOL("BOOL"),
    SECRET("SECRET"),
    ENUM_("ENUM"),
    AUTHORIZATION_CODE("AUTHORIZATION_CODE");

    public final String value;

    private ConfigVariableTemplateValueTypeEnum(String value) {
        this.value = value;
    }
}
