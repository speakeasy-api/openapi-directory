package openapisdk.models.shared;


public enum MethodEnum {
    GET("GET"),
    OPTIONS("OPTIONS"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    HEAD("HEAD");

    public final String value;

    private MethodEnum(String value) {
        this.value = value;
    }
}
