package openapisdk.models.operations;



public class GetRulesComplianceResponse {
    public String contentType;
    public GetRulesComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRulesComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRulesCompliance200ApplicationJson getRulesCompliance200ApplicationJSONObject;
    public GetRulesComplianceResponse withGetRulesCompliance200ApplicationJsonObject(GetRulesCompliance200ApplicationJson getRulesCompliance200ApplicationJSONObject) {
        this.getRulesCompliance200ApplicationJSONObject = getRulesCompliance200ApplicationJSONObject;
        return this;
    }
}