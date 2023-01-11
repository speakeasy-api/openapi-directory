package openapisdk.models.shared;


public enum HttpRequestHttpMethodEnum {
    HTTP_METHOD_UNSPECIFIED("HTTP_METHOD_UNSPECIFIED"),
    POST("POST"),
    GET("GET"),
    HEAD("HEAD"),
    PUT("PUT"),
    DELETE("DELETE"),
    PATCH("PATCH"),
    OPTIONS("OPTIONS");

    public final String value;

    private HttpRequestHttpMethodEnum(String value) {
        this.value = value;
    }
}
