package openapisdk.models.shared;


public enum ErrorsCodeEnum {
    BAD_REQUEST("BAD_REQUEST"),
    FORBIDDEN("FORBIDDEN"),
    NOT_FOUND("NOT_FOUND"),
    CONFLICT("CONFLICT"),
    GONE("GONE"),
    PRECONDITION_FAILED("PRECONDITION_FAILED"),
    INTERNAL_ERROR("INTERNAL_ERROR"),
    SERVICE_UNAVAILABLE("SERVICE_UNAVAILABLE");

    public final String value;

    private ErrorsCodeEnum(String value) {
        this.value = value;
    }
}
