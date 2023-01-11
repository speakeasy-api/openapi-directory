package openapisdk.models.shared;


public enum CustomEventErrorCodeEnum {
    UNKNOWN("UNKNOWN"),
    INVALID_ARGUMENT("INVALID_ARGUMENT"),
    INTERNAL("INTERNAL"),
    PERMISSION_DENIED("PERMISSION_DENIED"),
    NOT_FOUND("NOT_FOUND");

    public final String value;

    private CustomEventErrorCodeEnum(String value) {
        this.value = value;
    }
}
