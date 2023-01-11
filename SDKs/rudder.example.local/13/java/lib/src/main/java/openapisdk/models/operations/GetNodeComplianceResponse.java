package openapisdk.models.operations;



public class GetNodeComplianceResponse {
    public String contentType;
    public GetNodeComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNodeComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNodeCompliance200ApplicationJson getNodeCompliance200ApplicationJSONObject;
    public GetNodeComplianceResponse withGetNodeCompliance200ApplicationJsonObject(GetNodeCompliance200ApplicationJson getNodeCompliance200ApplicationJSONObject) {
        this.getNodeCompliance200ApplicationJSONObject = getNodeCompliance200ApplicationJSONObject;
        return this;
    }
}