package openapisdk.models.operations;



public class UpdateSigningKeyResponse {
    public String contentType;
    public UpdateSigningKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSigningKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSigningKey apiV2010AccountSigningKey;
    public UpdateSigningKeyResponse withApiV2010AccountSigningKey(openapisdk.models.shared.ApiV2010AccountSigningKey apiV2010AccountSigningKey) {
        this.apiV2010AccountSigningKey = apiV2010AccountSigningKey;
        return this;
    }
}