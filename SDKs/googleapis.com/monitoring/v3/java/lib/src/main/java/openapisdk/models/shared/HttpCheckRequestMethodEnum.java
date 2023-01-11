package openapisdk.models.shared;


public enum HttpCheckRequestMethodEnum {
    METHOD_UNSPECIFIED("METHOD_UNSPECIFIED"),
    GET("GET"),
    POST("POST");

    public final String value;

    private HttpCheckRequestMethodEnum(String value) {
        this.value = value;
    }
}
