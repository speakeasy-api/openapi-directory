package openapisdk.models.operations;



public class FetchSigningKeyResponse {
    public String contentType;
    public FetchSigningKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSigningKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountSigningKey apiV2010AccountSigningKey;
    public FetchSigningKeyResponse withApiV2010AccountSigningKey(openapisdk.models.shared.ApiV2010AccountSigningKey apiV2010AccountSigningKey) {
        this.apiV2010AccountSigningKey = apiV2010AccountSigningKey;
        return this;
    }
}