package openapisdk.models.shared;


public enum ErrorHandlerErrorCodeEnum {
    ERROR_CODE_UNSPECIFIED("ERROR_CODE_UNSPECIFIED"),
    ERROR_CODE_DEFAULT("ERROR_CODE_DEFAULT"),
    ERROR_CODE_OVER_QUOTA("ERROR_CODE_OVER_QUOTA"),
    ERROR_CODE_DOS_API_DENIAL("ERROR_CODE_DOS_API_DENIAL"),
    ERROR_CODE_TIMEOUT("ERROR_CODE_TIMEOUT");

    public final String value;

    private ErrorHandlerErrorCodeEnum(String value) {
        this.value = value;
    }
}
