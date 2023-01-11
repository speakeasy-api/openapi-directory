package openapisdk.models.operations;



public class GetGlobalComplianceResponse {
    public String contentType;
    public GetGlobalComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGlobalComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGlobalCompliance200ApplicationJson getGlobalCompliance200ApplicationJSONObject;
    public GetGlobalComplianceResponse withGetGlobalCompliance200ApplicationJsonObject(GetGlobalCompliance200ApplicationJson getGlobalCompliance200ApplicationJSONObject) {
        this.getGlobalCompliance200ApplicationJSONObject = getGlobalCompliance200ApplicationJSONObject;
        return this;
    }
}