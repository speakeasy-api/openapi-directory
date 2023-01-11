package openapisdk.models.shared;


public enum ScriptErrorErrorCodeEnum {
    ERROR_CODE_UNSPECIFIED("ERROR_CODE_UNSPECIFIED"),
    SYNTAX_ERROR("SYNTAX_ERROR"),
    DEPRECATED_SYNTAX("DEPRECATED_SYNTAX"),
    INTERNAL_ERROR("INTERNAL_ERROR");

    public final String value;

    private ScriptErrorErrorCodeEnum(String value) {
        this.value = value;
    }
}
