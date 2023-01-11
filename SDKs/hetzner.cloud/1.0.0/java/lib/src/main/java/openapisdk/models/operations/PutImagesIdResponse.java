package openapisdk.models.operations;



public class PutImagesIdResponse {
    public String contentType;
    public PutImagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutImagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PutImagesId200ApplicationJson putImagesId200ApplicationJSONObject;
    public PutImagesIdResponse withPutImagesId200ApplicationJsonObject(PutImagesId200ApplicationJson putImagesId200ApplicationJSONObject) {
        this.putImagesId200ApplicationJSONObject = putImagesId200ApplicationJSONObject;
        return this;
    }
}