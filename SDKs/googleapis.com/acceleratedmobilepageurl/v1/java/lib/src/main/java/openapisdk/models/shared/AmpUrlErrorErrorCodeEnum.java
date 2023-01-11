package openapisdk.models.shared;


public enum AmpUrlErrorErrorCodeEnum {
    ERROR_CODE_UNSPECIFIED("ERROR_CODE_UNSPECIFIED"),
    INPUT_URL_NOT_FOUND("INPUT_URL_NOT_FOUND"),
    NO_AMP_URL("NO_AMP_URL"),
    APPLICATION_ERROR("APPLICATION_ERROR"),
    URL_IS_VALID_AMP("URL_IS_VALID_AMP"),
    URL_IS_INVALID_AMP("URL_IS_INVALID_AMP");

    public final String value;

    private AmpUrlErrorErrorCodeEnum(String value) {
        this.value = value;
    }
}
