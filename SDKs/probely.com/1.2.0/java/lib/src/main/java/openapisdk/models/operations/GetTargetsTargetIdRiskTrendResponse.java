package openapisdk.models.operations;



public class GetTargetsTargetIdRiskTrendResponse {
    public String contentType;
    public GetTargetsTargetIdRiskTrendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdRiskTrendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsTargetIdRiskTrend200ApplicationJson[] getTargetsTargetIdRiskTrend200ApplicationJSONObjects;
    public GetTargetsTargetIdRiskTrendResponse withGetTargetsTargetIdRiskTrend200ApplicationJsonObjects(GetTargetsTargetIdRiskTrend200ApplicationJson[] getTargetsTargetIdRiskTrend200ApplicationJSONObjects) {
        this.getTargetsTargetIdRiskTrend200ApplicationJSONObjects = getTargetsTargetIdRiskTrend200ApplicationJSONObjects;
        return this;
    }
}