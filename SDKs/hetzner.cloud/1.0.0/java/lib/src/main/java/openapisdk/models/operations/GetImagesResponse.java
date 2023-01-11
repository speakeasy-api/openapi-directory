package openapisdk.models.operations;



public class GetImagesResponse {
    public String contentType;
    public GetImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImages200ApplicationJson getImages200ApplicationJSONObject;
    public GetImagesResponse withGetImages200ApplicationJsonObject(GetImages200ApplicationJson getImages200ApplicationJSONObject) {
        this.getImages200ApplicationJSONObject = getImages200ApplicationJSONObject;
        return this;
    }
}