package openapisdk.models.operations;



public class CreateNewKeyResponse {
    public String contentType;
    public CreateNewKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNewKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountNewKey apiV2010AccountNewKey;
    public CreateNewKeyResponse withApiV2010AccountNewKey(openapisdk.models.shared.ApiV2010AccountNewKey apiV2010AccountNewKey) {
        this.apiV2010AccountNewKey = apiV2010AccountNewKey;
        return this;
    }
}