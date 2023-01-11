package openapisdk.models.operations;



public class PutGlobalConfigResponse {
    public String contentType;
    public PutGlobalConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalConfig globalConfig;
    public PutGlobalConfigResponse withGlobalConfig(openapisdk.models.shared.GlobalConfig globalConfig) {
        this.globalConfig = globalConfig;
        return this;
    }
    public Long statusCode;
    public PutGlobalConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}