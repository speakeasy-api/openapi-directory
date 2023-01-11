package openapisdk.models.shared;


public enum EntryPointHttpMethodEnum {
    GET("GET"),
    PUT("PUT"),
    POST("POST"),
    DELETE("DELETE");

    public final String value;

    private EntryPointHttpMethodEnum(String value) {
        this.value = value;
    }
}
