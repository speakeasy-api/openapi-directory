package openapisdk.models.operations;



public class UpdateConnectAppResponse {
    public String contentType;
    public UpdateConnectAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConnectAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountConnectApp apiV2010AccountConnectApp;
    public UpdateConnectAppResponse withApiV2010AccountConnectApp(openapisdk.models.shared.ApiV2010AccountConnectApp apiV2010AccountConnectApp) {
        this.apiV2010AccountConnectApp = apiV2010AccountConnectApp;
        return this;
    }
}