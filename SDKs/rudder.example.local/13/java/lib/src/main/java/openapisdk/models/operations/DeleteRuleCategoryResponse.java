package openapisdk.models.operations;



public class DeleteRuleCategoryResponse {
    public String contentType;
    public DeleteRuleCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DeleteRuleCategory200ApplicationJson deleteRuleCategory200ApplicationJSONObject;
    public DeleteRuleCategoryResponse withDeleteRuleCategory200ApplicationJsonObject(DeleteRuleCategory200ApplicationJson deleteRuleCategory200ApplicationJSONObject) {
        this.deleteRuleCategory200ApplicationJSONObject = deleteRuleCategory200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public DeleteRuleCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}