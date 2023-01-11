package openapisdk.models.operations;



public class UpdateSnowMonkeyResponse {
    public String contentType;
    public UpdateSnowMonkeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig;
    public UpdateSnowMonkeyResponse withSnowMonkeyConfig(openapisdk.models.shared.SnowMonkeyConfig snowMonkeyConfig) {
        this.snowMonkeyConfig = snowMonkeyConfig;
        return this;
    }
    public Long statusCode;
    public UpdateSnowMonkeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}