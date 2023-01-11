package openapisdk.models.operations;



public class PostAssetsReturnsResponse {
    public String contentType;
    public PostAssetsReturnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsReturnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsReturns200ApplicationJson postAssetsReturns200ApplicationJSONObject;
    public PostAssetsReturnsResponse withPostAssetsReturns200ApplicationJsonObject(PostAssetsReturns200ApplicationJson postAssetsReturns200ApplicationJSONObject) {
        this.postAssetsReturns200ApplicationJSONObject = postAssetsReturns200ApplicationJSONObject;
        return this;
    }
}