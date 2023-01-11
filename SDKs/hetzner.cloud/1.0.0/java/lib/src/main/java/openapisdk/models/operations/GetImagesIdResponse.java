package openapisdk.models.operations;



public class GetImagesIdResponse {
    public String contentType;
    public GetImagesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImagesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImagesId200ApplicationJson getImagesId200ApplicationJSONObject;
    public GetImagesIdResponse withGetImagesId200ApplicationJsonObject(GetImagesId200ApplicationJson getImagesId200ApplicationJSONObject) {
        this.getImagesId200ApplicationJSONObject = getImagesId200ApplicationJSONObject;
        return this;
    }
}