package openapisdk.models.shared;


public enum MessagingV1ServiceFallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MessagingV1ServiceFallbackMethodEnum(String value) {
        this.value = value;
    }
}
