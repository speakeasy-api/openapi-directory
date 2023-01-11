package openapisdk.models.operations;



public class GetRuleComplianceResponse {
    public String contentType;
    public GetRuleComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRuleComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRuleCompliance200ApplicationJson getRuleCompliance200ApplicationJSONObject;
    public GetRuleComplianceResponse withGetRuleCompliance200ApplicationJsonObject(GetRuleCompliance200ApplicationJson getRuleCompliance200ApplicationJSONObject) {
        this.getRuleCompliance200ApplicationJSONObject = getRuleCompliance200ApplicationJSONObject;
        return this;
    }
}