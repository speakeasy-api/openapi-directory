package openapisdk.models.operations;


public enum HooksPostRequestMethodEnum {
    POST("POST"),
    JSON("JSON"),
    GET("GET");

    public final String value;

    private HooksPostRequestMethodEnum(String value) {
        this.value = value;
    }
}
