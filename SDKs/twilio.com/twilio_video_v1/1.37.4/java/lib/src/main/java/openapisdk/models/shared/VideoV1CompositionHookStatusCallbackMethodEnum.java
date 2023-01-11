package openapisdk.models.shared;


public enum VideoV1CompositionHookStatusCallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private VideoV1CompositionHookStatusCallbackMethodEnum(String value) {
        this.value = value;
    }
}
