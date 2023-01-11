package openapisdk.models.operations;



public class GetVolumesResponse {
    public String contentType;
    public GetVolumesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVolumesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetVolumes200ApplicationJson getVolumes200ApplicationJSONObject;
    public GetVolumesResponse withGetVolumes200ApplicationJsonObject(GetVolumes200ApplicationJson getVolumes200ApplicationJSONObject) {
        this.getVolumes200ApplicationJSONObject = getVolumes200ApplicationJSONObject;
        return this;
    }
}