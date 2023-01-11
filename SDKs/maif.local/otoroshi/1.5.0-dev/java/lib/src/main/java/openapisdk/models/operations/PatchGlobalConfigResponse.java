package openapisdk.models.operations;



public class PatchGlobalConfigResponse {
    public String contentType;
    public PatchGlobalConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalConfig globalConfig;
    public PatchGlobalConfigResponse withGlobalConfig(openapisdk.models.shared.GlobalConfig globalConfig) {
        this.globalConfig = globalConfig;
        return this;
    }
    public Long statusCode;
    public PatchGlobalConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}