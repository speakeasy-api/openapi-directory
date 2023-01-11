package openapisdk.models.operations;



public class FetchShortCodeResponse {
    public String contentType;
    public FetchShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountShortCode apiV2010AccountShortCode;
    public FetchShortCodeResponse withApiV2010AccountShortCode(openapisdk.models.shared.ApiV2010AccountShortCode apiV2010AccountShortCode) {
        this.apiV2010AccountShortCode = apiV2010AccountShortCode;
        return this;
    }
}