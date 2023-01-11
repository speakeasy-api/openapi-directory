package openapisdk.models.operations;



public class CreateRuleCategoryResponse {
    public String contentType;
    public CreateRuleCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public CreateRuleCategory200ApplicationJson createRuleCategory200ApplicationJSONObject;
    public CreateRuleCategoryResponse withCreateRuleCategory200ApplicationJsonObject(CreateRuleCategory200ApplicationJson createRuleCategory200ApplicationJSONObject) {
        this.createRuleCategory200ApplicationJSONObject = createRuleCategory200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public CreateRuleCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}