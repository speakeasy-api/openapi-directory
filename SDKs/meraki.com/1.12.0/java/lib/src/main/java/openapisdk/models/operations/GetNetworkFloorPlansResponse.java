package openapisdk.models.operations;



public class GetNetworkFloorPlansResponse {
    public String contentType;
    public GetNetworkFloorPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkFloorPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkFloorPlans200ApplicationJSONObject;
    public GetNetworkFloorPlansResponse withGetNetworkFloorPlans200ApplicationJsonObject(java.util.Map<String, Object> getNetworkFloorPlans200ApplicationJSONObject) {
        this.getNetworkFloorPlans200ApplicationJSONObject = getNetworkFloorPlans200ApplicationJSONObject;
        return this;
    }
}