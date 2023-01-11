package openapisdk.models.operations;



public class PatchSnowMonkeyResponse {
    public String contentType;
    public PatchSnowMonkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig;
    public PatchSnowMonkeyResponse withSnowMonkeyConfig(openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig) {
        this.snowMonkeyConfig = snowMonkeyConfig;
        return this;
    }
    public Long statusCode;
    public PatchSnowMonkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}