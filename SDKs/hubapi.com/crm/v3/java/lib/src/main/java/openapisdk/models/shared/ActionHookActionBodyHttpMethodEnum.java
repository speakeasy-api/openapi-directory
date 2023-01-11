package openapisdk.models.shared;


public enum ActionHookActionBodyHttpMethodEnum {
    CONNECT("CONNECT"),
    DELETE("DELETE"),
    GET("GET"),
    HEAD("HEAD"),
    OPTIONS("OPTIONS"),
    PATCH("PATCH"),
    POST("POST"),
    PUT("PUT"),
    TRACE("TRACE");

    public final String value;

    private ActionHookActionBodyHttpMethodEnum(String value) {
        this.value = value;
    }
}
