package openapisdk.models.shared;


public enum MediaV1MediaProcessorStatusCallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MediaV1MediaProcessorStatusCallbackMethodEnum(String value) {
        this.value = value;
    }
}
