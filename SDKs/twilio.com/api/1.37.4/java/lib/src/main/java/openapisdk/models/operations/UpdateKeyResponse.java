package openapisdk.models.operations;



public class UpdateKeyResponse {
    public String contentType;
    public UpdateKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountKey apiV2010AccountKey;
    public UpdateKeyResponse withApiV2010AccountKey(openapisdk.models.shared.ApiV2010AccountKey apiV2010AccountKey) {
        this.apiV2010AccountKey = apiV2010AccountKey;
        return this;
    }
}