package openapisdk.models.operations;



public class FetchConnectAppResponse {
    public String contentType;
    public FetchConnectAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConnectAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConnectApp apiV2010AccountConnectApp;
    public FetchConnectAppResponse withApiV2010AccountConnectApp(openapisdk.models.shared.ApiV2010AccountConnectApp apiV2010AccountConnectApp) {
        this.apiV2010AccountConnectApp = apiV2010AccountConnectApp;
        return this;
    }
}