package openapisdk.models.operations;



public class PostAssetsVarianceResponse {
    public String contentType;
    public PostAssetsVarianceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsVarianceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsVariance200ApplicationJson postAssetsVariance200ApplicationJSONObject;
    public PostAssetsVarianceResponse withPostAssetsVariance200ApplicationJsonObject(PostAssetsVariance200ApplicationJson postAssetsVariance200ApplicationJSONObject) {
        this.postAssetsVariance200ApplicationJSONObject = postAssetsVariance200ApplicationJSONObject;
        return this;
    }
}