package openapisdk.models.operations;



public class FirebaseProjectsWebAppsGetConfigResponse {
    public String contentType;
    public FirebaseProjectsWebAppsGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsWebAppsGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebAppConfig webAppConfig;
    public FirebaseProjectsWebAppsGetConfigResponse withWebAppConfig(openapisdk.models.shared.WebAppConfig webAppConfig) {
        this.webAppConfig = webAppConfig;
        return this;
    }
}