package openapisdk.models.operations;



public class PutNetworksIdResponse {
    public String contentType;
    public PutNetworksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutNetworksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutNetworksId200ApplicationJson putNetworksId200ApplicationJSONObject;
    public PutNetworksIdResponse withPutNetworksId200ApplicationJsonObject(PutNetworksId200ApplicationJson putNetworksId200ApplicationJSONObject) {
        this.putNetworksId200ApplicationJSONObject = putNetworksId200ApplicationJSONObject;
        return this;
    }
}