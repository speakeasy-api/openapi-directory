package openapisdk.models.operations;



public class AppsGetUserInstallationResponse {
    public String contentType;
    public AppsGetUserInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetUserInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Installation installation;
    public AppsGetUserInstallationResponse withInstallation(openapisdk.models.shared.Installation installation) {
        this.installation = installation;
        return this;
    }
}