package openapisdk.models.shared;


public enum MonitorV1AlertRequestMethodEnum {
    HEAD("HEAD"),
    GET("GET"),
    POST("POST"),
    PATCH("PATCH"),
    PUT("PUT"),
    DELETE("DELETE");

    public final String value;

    private MonitorV1AlertRequestMethodEnum(String value) {
        this.value = value;
    }
}
