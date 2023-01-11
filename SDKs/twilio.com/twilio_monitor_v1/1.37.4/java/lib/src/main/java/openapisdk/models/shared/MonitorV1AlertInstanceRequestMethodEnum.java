package openapisdk.models.shared;


public enum MonitorV1AlertInstanceRequestMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MonitorV1AlertInstanceRequestMethodEnum(String value) {
        this.value = value;
    }
}
