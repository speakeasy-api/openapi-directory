package openapisdk.models.operations;



public class GetTargetsAllRiskTrendResponse {
    public String contentType;
    public GetTargetsAllRiskTrendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsAllRiskTrendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsAllRiskTrend200ApplicationJson[] getTargetsAllRiskTrend200ApplicationJSONObjects;
    public GetTargetsAllRiskTrendResponse withGetTargetsAllRiskTrend200ApplicationJsonObjects(GetTargetsAllRiskTrend200ApplicationJson[] getTargetsAllRiskTrend200ApplicationJSONObjects) {
        this.getTargetsAllRiskTrend200ApplicationJSONObjects = getTargetsAllRiskTrend200ApplicationJSONObjects;
        return this;
    }
}