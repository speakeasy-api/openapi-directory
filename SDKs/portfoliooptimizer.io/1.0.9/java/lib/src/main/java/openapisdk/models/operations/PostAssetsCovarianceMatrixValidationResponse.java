package openapisdk.models.operations;



public class PostAssetsCovarianceMatrixValidationResponse {
    public String contentType;
    public PostAssetsCovarianceMatrixValidationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsCovarianceMatrixValidationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsCovarianceMatrixValidation200ApplicationJson postAssetsCovarianceMatrixValidation200ApplicationJSONObject;
    public PostAssetsCovarianceMatrixValidationResponse withPostAssetsCovarianceMatrixValidation200ApplicationJsonObject(PostAssetsCovarianceMatrixValidation200ApplicationJson postAssetsCovarianceMatrixValidation200ApplicationJSONObject) {
        this.postAssetsCovarianceMatrixValidation200ApplicationJSONObject = postAssetsCovarianceMatrixValidation200ApplicationJSONObject;
        return this;
    }
}