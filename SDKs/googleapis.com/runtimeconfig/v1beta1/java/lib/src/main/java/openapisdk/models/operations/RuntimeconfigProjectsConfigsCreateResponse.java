package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsCreateResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RuntimeConfig runtimeConfig;
    public RuntimeconfigProjectsConfigsCreateResponse withRuntimeConfig(openapisdk.models.shared.RuntimeConfig runtimeConfig) {
        this.runtimeConfig = runtimeConfig;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}