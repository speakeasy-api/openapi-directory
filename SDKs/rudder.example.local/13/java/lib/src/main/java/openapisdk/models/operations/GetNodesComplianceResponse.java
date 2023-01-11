package openapisdk.models.operations;



public class GetNodesComplianceResponse {
    public String contentType;
    public GetNodesComplianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNodesComplianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetNodesCompliance200ApplicationJson getNodesCompliance200ApplicationJSONObject;
    public GetNodesComplianceResponse withGetNodesCompliance200ApplicationJsonObject(GetNodesCompliance200ApplicationJson getNodesCompliance200ApplicationJSONObject) {
        this.getNodesCompliance200ApplicationJSONObject = getNodesCompliance200ApplicationJSONObject;
        return this;
    }
}