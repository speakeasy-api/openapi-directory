package openapisdk.models.operations;



public class PostAssetsCorrelationMatrixNearestResponse {
    public String contentType;
    public PostAssetsCorrelationMatrixNearestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsCorrelationMatrixNearestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsCorrelationMatrixNearest200ApplicationJson postAssetsCorrelationMatrixNearest200ApplicationJSONObject;
    public PostAssetsCorrelationMatrixNearestResponse withPostAssetsCorrelationMatrixNearest200ApplicationJsonObject(PostAssetsCorrelationMatrixNearest200ApplicationJson postAssetsCorrelationMatrixNearest200ApplicationJSONObject) {
        this.postAssetsCorrelationMatrixNearest200ApplicationJSONObject = postAssetsCorrelationMatrixNearest200ApplicationJSONObject;
        return this;
    }
}