package openapisdk.models.shared;


public enum WirelessV1SimCommandsCallbackMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private WirelessV1SimCommandsCallbackMethodEnum(String value) {
        this.value = value;
    }
}
