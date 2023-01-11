package openapisdk.models.operations;



public class GlobalConfigResponse {
    public String contentType;
    public GlobalConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalConfig globalConfig;
    public GlobalConfigResponse withGlobalConfig(openapisdk.models.shared.GlobalConfig globalConfig) {
        this.globalConfig = globalConfig;
        return this;
    }
    public Long statusCode;
    public GlobalConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}