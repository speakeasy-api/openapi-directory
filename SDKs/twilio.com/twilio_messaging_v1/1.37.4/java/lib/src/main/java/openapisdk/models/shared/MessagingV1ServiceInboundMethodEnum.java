package openapisdk.models.shared;


public enum MessagingV1ServiceInboundMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MessagingV1ServiceInboundMethodEnum(String value) {
        this.value = value;
    }
}
