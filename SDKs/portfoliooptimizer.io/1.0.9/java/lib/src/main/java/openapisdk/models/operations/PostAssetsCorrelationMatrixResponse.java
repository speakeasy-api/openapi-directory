package openapisdk.models.operations;



public class PostAssetsCorrelationMatrixResponse {
    public String contentType;
    public PostAssetsCorrelationMatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsCorrelationMatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsCorrelationMatrix200ApplicationJson postAssetsCorrelationMatrix200ApplicationJSONObject;
    public PostAssetsCorrelationMatrixResponse withPostAssetsCorrelationMatrix200ApplicationJsonObject(PostAssetsCorrelationMatrix200ApplicationJson postAssetsCorrelationMatrix200ApplicationJSONObject) {
        this.postAssetsCorrelationMatrix200ApplicationJSONObject = postAssetsCorrelationMatrix200ApplicationJSONObject;
        return this;
    }
}