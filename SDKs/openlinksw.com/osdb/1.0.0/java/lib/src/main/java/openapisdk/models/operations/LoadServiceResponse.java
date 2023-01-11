package openapisdk.models.operations;



public class LoadServiceResponse {
    public String contentType;
    public LoadServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public LoadServiceResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public LoadServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LoadService200ApplicationJson loadService200ApplicationJSONObject;
    public LoadServiceResponse withLoadService200ApplicationJsonObject(LoadService200ApplicationJson loadService200ApplicationJSONObject) {
        this.loadService200ApplicationJSONObject = loadService200ApplicationJSONObject;
        return this;
    }
}