package openapisdk.models.operations;



public class CreateTokenResponse {
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountToken apiV2010AccountToken;
    public CreateTokenResponse withApiV2010AccountToken(openapisdk.models.shared.ApiV2010AccountToken apiV2010AccountToken) {
        this.apiV2010AccountToken = apiV2010AccountToken;
        return this;
    }
}