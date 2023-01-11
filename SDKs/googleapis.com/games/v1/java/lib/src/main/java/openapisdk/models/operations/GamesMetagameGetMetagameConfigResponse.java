package openapisdk.models.operations;



public class GamesMetagameGetMetagameConfigResponse {
    public String contentType;
    public GamesMetagameGetMetagameConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MetagameConfig metagameConfig;
    public GamesMetagameGetMetagameConfigResponse withMetagameConfig(openapisdk.models.shared.MetagameConfig metagameConfig) {
        this.metagameConfig = metagameConfig;
        return this;
    }
    public Long statusCode;
    public GamesMetagameGetMetagameConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}