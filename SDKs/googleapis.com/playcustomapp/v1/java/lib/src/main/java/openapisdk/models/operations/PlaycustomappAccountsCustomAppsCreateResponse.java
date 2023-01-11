package openapisdk.models.operations;



public class PlaycustomappAccountsCustomAppsCreateResponse {
    public String contentType;
    public PlaycustomappAccountsCustomAppsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomApp customApp;
    public PlaycustomappAccountsCustomAppsCreateResponse withCustomApp(openapisdk.models.shared.CustomApp customApp) {
        this.customApp = customApp;
        return this;
    }
    public Long statusCode;
    public PlaycustomappAccountsCustomAppsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}