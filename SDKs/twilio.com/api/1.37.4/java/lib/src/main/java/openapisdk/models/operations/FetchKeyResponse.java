package openapisdk.models.operations;



public class FetchKeyResponse {
    public String contentType;
    public FetchKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountKey apiV2010AccountKey;
    public FetchKeyResponse withApiV2010AccountKey(openapisdk.models.shared.ApiV2010AccountKey apiV2010AccountKey) {
        this.apiV2010AccountKey = apiV2010AccountKey;
        return this;
    }
}