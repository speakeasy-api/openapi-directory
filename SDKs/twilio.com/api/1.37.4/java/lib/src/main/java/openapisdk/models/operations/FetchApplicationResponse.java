package openapisdk.models.operations;



public class FetchApplicationResponse {
    public String contentType;
    public FetchApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication;
    public FetchApplicationResponse withApiV2010AccountApplication(openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication) {
        this.apiV2010AccountApplication = apiV2010AccountApplication;
        return this;
    }
}