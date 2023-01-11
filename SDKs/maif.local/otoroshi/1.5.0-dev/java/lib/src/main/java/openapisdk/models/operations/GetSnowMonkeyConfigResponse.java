package openapisdk.models.operations;



public class GetSnowMonkeyConfigResponse {
    public String contentType;
    public GetSnowMonkeyConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig;
    public GetSnowMonkeyConfigResponse withSnowMonkeyConfig(openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig) {
        this.snowMonkeyConfig = snowMonkeyConfig;
        return this;
    }
    public Long statusCode;
    public GetSnowMonkeyConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}