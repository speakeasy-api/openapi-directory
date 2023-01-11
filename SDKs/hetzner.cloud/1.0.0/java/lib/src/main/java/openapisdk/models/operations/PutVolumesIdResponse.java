package openapisdk.models.operations;



public class PutVolumesIdResponse {
    public String contentType;
    public PutVolumesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutVolumesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutVolumesId200ApplicationJson putVolumesId200ApplicationJSONObject;
    public PutVolumesIdResponse withPutVolumesId200ApplicationJsonObject(PutVolumesId200ApplicationJson putVolumesId200ApplicationJSONObject) {
        this.putVolumesId200ApplicationJSONObject = putVolumesId200ApplicationJSONObject;
        return this;
    }
}