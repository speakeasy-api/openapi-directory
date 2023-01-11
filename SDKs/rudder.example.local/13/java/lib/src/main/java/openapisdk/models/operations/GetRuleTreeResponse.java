package openapisdk.models.operations;



public class GetRuleTreeResponse {
    public String contentType;
    public GetRuleTreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetRuleTree200ApplicationJson getRuleTree200ApplicationJSONObject;
    public GetRuleTreeResponse withGetRuleTree200ApplicationJsonObject(GetRuleTree200ApplicationJson getRuleTree200ApplicationJSONObject) {
        this.getRuleTree200ApplicationJSONObject = getRuleTree200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetRuleTreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}