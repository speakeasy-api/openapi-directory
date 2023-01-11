package openapisdk.models.shared;


public enum MediaV1PlayerStreamerStatusCallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MediaV1PlayerStreamerStatusCallbackMethodEnum(String value) {
        this.value = value;
    }
}
