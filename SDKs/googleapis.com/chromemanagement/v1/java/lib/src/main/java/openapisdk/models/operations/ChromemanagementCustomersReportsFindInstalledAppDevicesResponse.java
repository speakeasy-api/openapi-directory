package openapisdk.models.operations;



public class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse {
    public String contentType;
    public ChromemanagementCustomersReportsFindInstalledAppDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse googleChromeManagementV1FindInstalledAppDevicesResponse;
    public ChromemanagementCustomersReportsFindInstalledAppDevicesResponse withGoogleChromeManagementV1FindInstalledAppDevicesResponse(openapisdk.models.shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse googleChromeManagementV1FindInstalledAppDevicesResponse) {
        this.googleChromeManagementV1FindInstalledAppDevicesResponse = googleChromeManagementV1FindInstalledAppDevicesResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersReportsFindInstalledAppDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}