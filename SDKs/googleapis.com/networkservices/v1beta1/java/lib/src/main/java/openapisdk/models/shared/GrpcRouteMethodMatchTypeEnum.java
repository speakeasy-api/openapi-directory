package openapisdk.models.shared;


public enum GrpcRouteMethodMatchTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    EXACT("EXACT"),
    REGULAR_EXPRESSION("REGULAR_EXPRESSION");

    public final String value;

    private GrpcRouteMethodMatchTypeEnum(String value) {
        this.value = value;
    }
}
