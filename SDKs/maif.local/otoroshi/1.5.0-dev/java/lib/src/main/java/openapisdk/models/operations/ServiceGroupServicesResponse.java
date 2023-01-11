package openapisdk.models.operations;



public class ServiceGroupServicesResponse {
    public openapisdk.models.shared.ApiKey[] apiKeys;
    public ServiceGroupServicesResponse withApiKeys(openapisdk.models.shared.ApiKey[] apiKeys) {
        this.apiKeys = apiKeys;
        return this;
    }
    public String contentType;
    public ServiceGroupServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServiceGroupServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}