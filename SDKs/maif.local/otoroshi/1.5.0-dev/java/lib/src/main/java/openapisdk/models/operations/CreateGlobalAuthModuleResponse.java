package openapisdk.models.operations;



public class CreateGlobalAuthModuleResponse {
    public String contentType;
    public CreateGlobalAuthModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateGlobalAuthModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createGlobalAuthModule200ApplicationJSONOneOf;
    public CreateGlobalAuthModuleResponse withCreateGlobalAuthModule200ApplicationJsonOneOf(Object createGlobalAuthModule200ApplicationJSONOneOf) {
        this.createGlobalAuthModule200ApplicationJSONOneOf = createGlobalAuthModule200ApplicationJSONOneOf;
        return this;
    }
}