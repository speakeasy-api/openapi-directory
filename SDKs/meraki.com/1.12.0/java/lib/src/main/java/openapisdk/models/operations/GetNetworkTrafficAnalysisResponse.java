package openapisdk.models.operations;



public class GetNetworkTrafficAnalysisResponse {
    public String contentType;
    public GetNetworkTrafficAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkTrafficAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkTrafficAnalysis200ApplicationJSONObject;
    public GetNetworkTrafficAnalysisResponse withGetNetworkTrafficAnalysis200ApplicationJsonObject(java.util.Map<String, Object> getNetworkTrafficAnalysis200ApplicationJSONObject) {
        this.getNetworkTrafficAnalysis200ApplicationJSONObject = getNetworkTrafficAnalysis200ApplicationJSONObject;
        return this;
    }
}