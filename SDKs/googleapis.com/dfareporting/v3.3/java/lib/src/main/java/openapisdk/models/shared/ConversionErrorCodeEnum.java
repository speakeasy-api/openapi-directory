package openapisdk.models.shared;


public enum ConversionErrorCodeEnum {
    INVALID_ARGUMENT("INVALID_ARGUMENT"),
    INTERNAL("INTERNAL"),
    PERMISSION_DENIED("PERMISSION_DENIED"),
    NOT_FOUND("NOT_FOUND");

    public final String value;

    private ConversionErrorCodeEnum(String value) {
        this.value = value;
    }
}
