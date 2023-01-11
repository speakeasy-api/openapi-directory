package openapisdk.models.operations;



public class DriveAppsGetResponse {
    public openapisdk.models.shared.App app;
    public DriveAppsGetResponse withApp(openapisdk.models.shared.App app) {
        this.app = app;
        return this;
    }
    public String contentType;
    public DriveAppsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveAppsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}