package openapisdk.models.shared;


public enum PsuHttpMethodEnum {
    GET("GET"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE");

    public final String value;

    private PsuHttpMethodEnum(String value) {
        this.value = value;
    }
}
