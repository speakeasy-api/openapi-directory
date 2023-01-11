package openapisdk.models.operations;



public class RuleDetailsResponse {
    public String contentType;
    public RuleDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RuleDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RuleDetails200ApplicationJson ruleDetails200ApplicationJSONObject;
    public RuleDetailsResponse withRuleDetails200ApplicationJsonObject(RuleDetails200ApplicationJson ruleDetails200ApplicationJSONObject) {
        this.ruleDetails200ApplicationJSONObject = ruleDetails200ApplicationJSONObject;
        return this;
    }
}