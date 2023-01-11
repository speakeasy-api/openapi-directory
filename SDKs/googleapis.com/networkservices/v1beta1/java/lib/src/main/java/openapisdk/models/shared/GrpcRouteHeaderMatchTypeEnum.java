package openapisdk.models.shared;


public enum GrpcRouteHeaderMatchTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    EXACT("EXACT"),
    REGULAR_EXPRESSION("REGULAR_EXPRESSION");

    public final String value;

    private GrpcRouteHeaderMatchTypeEnum(String value) {
        this.value = value;
    }
}
