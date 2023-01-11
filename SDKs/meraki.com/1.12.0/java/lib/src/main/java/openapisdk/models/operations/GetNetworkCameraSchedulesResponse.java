package openapisdk.models.operations;



public class GetNetworkCameraSchedulesResponse {
    public String contentType;
    public GetNetworkCameraSchedulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkCameraSchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkCameraSchedules200ApplicationJSONObject;
    public GetNetworkCameraSchedulesResponse withGetNetworkCameraSchedules200ApplicationJsonObject(java.util.Map<String, Object> getNetworkCameraSchedules200ApplicationJSONObject) {
        this.getNetworkCameraSchedules200ApplicationJSONObject = getNetworkCameraSchedules200ApplicationJSONObject;
        return this;
    }
}