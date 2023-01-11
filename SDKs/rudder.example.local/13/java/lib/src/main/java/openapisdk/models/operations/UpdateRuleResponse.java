package openapisdk.models.operations;



public class UpdateRuleResponse {
    public String contentType;
    public UpdateRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateRule200ApplicationJson updateRule200ApplicationJSONObject;
    public UpdateRuleResponse withUpdateRule200ApplicationJsonObject(UpdateRule200ApplicationJson updateRule200ApplicationJSONObject) {
        this.updateRule200ApplicationJSONObject = updateRule200ApplicationJSONObject;
        return this;
    }
}