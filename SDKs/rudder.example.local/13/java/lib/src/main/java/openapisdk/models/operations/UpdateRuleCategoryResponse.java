package openapisdk.models.operations;



public class UpdateRuleCategoryResponse {
    public String contentType;
    public UpdateRuleCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRuleCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateRuleCategory200ApplicationJson updateRuleCategory200ApplicationJSONObject;
    public UpdateRuleCategoryResponse withUpdateRuleCategory200ApplicationJsonObject(UpdateRuleCategory200ApplicationJson updateRuleCategory200ApplicationJSONObject) {
        this.updateRuleCategory200ApplicationJSONObject = updateRuleCategory200ApplicationJSONObject;
        return this;
    }
}