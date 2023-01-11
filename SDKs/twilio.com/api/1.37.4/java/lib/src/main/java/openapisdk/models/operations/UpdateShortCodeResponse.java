package openapisdk.models.operations;



public class UpdateShortCodeResponse {
    public String contentType;
    public UpdateShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountShortCode apiV2010AccountShortCode;
    public UpdateShortCodeResponse withApiV2010AccountShortCode(openapisdk.models.shared.ApiV2010AccountShortCode apiV2010AccountShortCode) {
        this.apiV2010AccountShortCode = apiV2010AccountShortCode;
        return this;
    }
}