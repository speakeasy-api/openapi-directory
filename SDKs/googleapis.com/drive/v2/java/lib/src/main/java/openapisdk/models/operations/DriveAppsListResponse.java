package openapisdk.models.operations;



public class DriveAppsListResponse {
    public openapisdk.models.shared.AppList appList;
    public DriveAppsListResponse withAppList(openapisdk.models.shared.AppList appList) {
        this.appList = appList;
        return this;
    }
    public String contentType;
    public DriveAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}