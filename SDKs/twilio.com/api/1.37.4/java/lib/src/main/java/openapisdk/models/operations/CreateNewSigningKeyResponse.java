package openapisdk.models.operations;



public class CreateNewSigningKeyResponse {
    public String contentType;
    public CreateNewSigningKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNewSigningKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountNewSigningKey apiV2010AccountNewSigningKey;
    public CreateNewSigningKeyResponse withApiV2010AccountNewSigningKey(openapisdk.models.shared.ApiV2010AccountNewSigningKey apiV2010AccountNewSigningKey) {
        this.apiV2010AccountNewSigningKey = apiV2010AccountNewSigningKey;
        return this;
    }
}