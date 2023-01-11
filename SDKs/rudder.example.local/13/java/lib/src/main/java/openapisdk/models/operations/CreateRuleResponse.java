package openapisdk.models.operations;



public class CreateRuleResponse {
    public String contentType;
    public CreateRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateRule200ApplicationJson createRule200ApplicationJSONObject;
    public CreateRuleResponse withCreateRule200ApplicationJsonObject(CreateRule200ApplicationJson createRule200ApplicationJSONObject) {
        this.createRule200ApplicationJSONObject = createRule200ApplicationJSONObject;
        return this;
    }
}