package openapisdk.models.operations;



public class GetVolumesIdResponse {
    public String contentType;
    public GetVolumesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVolumesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetVolumesId200ApplicationJson getVolumesId200ApplicationJSONObject;
    public GetVolumesIdResponse withGetVolumesId200ApplicationJsonObject(GetVolumesId200ApplicationJson getVolumesId200ApplicationJSONObject) {
        this.getVolumesId200ApplicationJSONObject = getVolumesId200ApplicationJSONObject;
        return this;
    }
}