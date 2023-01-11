package openapisdk.models.operations;



public class ChromemanagementCustomersReportsCountInstalledAppsResponse {
    public String contentType;
    public ChromemanagementCustomersReportsCountInstalledAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1CountInstalledAppsResponse googleChromeManagementV1CountInstalledAppsResponse;
    public ChromemanagementCustomersReportsCountInstalledAppsResponse withGoogleChromeManagementV1CountInstalledAppsResponse(openapisdk.models.shared.GoogleChromeManagementV1CountInstalledAppsResponse googleChromeManagementV1CountInstalledAppsResponse) {
        this.googleChromeManagementV1CountInstalledAppsResponse = googleChromeManagementV1CountInstalledAppsResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersReportsCountInstalledAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}