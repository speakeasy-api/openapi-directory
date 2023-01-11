package openapisdk.models.operations;



public class PostAssetsCorrelationMatrixValidationResponse {
    public String contentType;
    public PostAssetsCorrelationMatrixValidationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsCorrelationMatrixValidationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsCorrelationMatrixValidation200ApplicationJson postAssetsCorrelationMatrixValidation200ApplicationJSONObject;
    public PostAssetsCorrelationMatrixValidationResponse withPostAssetsCorrelationMatrixValidation200ApplicationJsonObject(PostAssetsCorrelationMatrixValidation200ApplicationJson postAssetsCorrelationMatrixValidation200ApplicationJSONObject) {
        this.postAssetsCorrelationMatrixValidation200ApplicationJSONObject = postAssetsCorrelationMatrixValidation200ApplicationJSONObject;
        return this;
    }
}