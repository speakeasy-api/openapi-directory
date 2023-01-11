package openapisdk.models.operations;



public class UnloadServiceResponse {
    public String contentType;
    public UnloadServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public UnloadServiceResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public UnloadServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UnloadService200ApplicationJson unloadService200ApplicationJSONObject;
    public UnloadServiceResponse withUnloadService200ApplicationJsonObject(UnloadService200ApplicationJson unloadService200ApplicationJSONObject) {
        this.unloadService200ApplicationJSONObject = unloadService200ApplicationJSONObject;
        return this;
    }
}