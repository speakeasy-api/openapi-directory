package openapisdk.models.operations;



public class PostAssetsCovarianceMatrixResponse {
    public String contentType;
    public PostAssetsCovarianceMatrixResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsCovarianceMatrixResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsCovarianceMatrix200ApplicationJson postAssetsCovarianceMatrix200ApplicationJSONObject;
    public PostAssetsCovarianceMatrixResponse withPostAssetsCovarianceMatrix200ApplicationJsonObject(PostAssetsCovarianceMatrix200ApplicationJson postAssetsCovarianceMatrix200ApplicationJSONObject) {
        this.postAssetsCovarianceMatrix200ApplicationJSONObject = postAssetsCovarianceMatrix200ApplicationJSONObject;
        return this;
    }
}