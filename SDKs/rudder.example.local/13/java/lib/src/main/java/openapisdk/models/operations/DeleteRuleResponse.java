package openapisdk.models.operations;



public class DeleteRuleResponse {
    public String contentType;
    public DeleteRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteRule200ApplicationJson deleteRule200ApplicationJSONObject;
    public DeleteRuleResponse withDeleteRule200ApplicationJsonObject(DeleteRule200ApplicationJson deleteRule200ApplicationJSONObject) {
        this.deleteRule200ApplicationJSONObject = deleteRule200ApplicationJSONObject;
        return this;
    }
}