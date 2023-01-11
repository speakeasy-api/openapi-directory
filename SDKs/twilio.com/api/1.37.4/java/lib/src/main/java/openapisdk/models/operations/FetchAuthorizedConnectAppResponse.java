package openapisdk.models.operations;



public class FetchAuthorizedConnectAppResponse {
    public String contentType;
    public FetchAuthorizedConnectAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAuthorizedConnectAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp apiV2010AccountAuthorizedConnectApp;
    public FetchAuthorizedConnectAppResponse withApiV2010AccountAuthorizedConnectApp(openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp apiV2010AccountAuthorizedConnectApp) {
        this.apiV2010AccountAuthorizedConnectApp = apiV2010AccountAuthorizedConnectApp;
        return this;
    }
}