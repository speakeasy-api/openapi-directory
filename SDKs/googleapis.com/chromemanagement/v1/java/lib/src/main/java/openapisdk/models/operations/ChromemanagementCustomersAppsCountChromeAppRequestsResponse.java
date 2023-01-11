package openapisdk.models.operations;



public class ChromemanagementCustomersAppsCountChromeAppRequestsResponse {
    public String contentType;
    public ChromemanagementCustomersAppsCountChromeAppRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1CountChromeAppRequestsResponse googleChromeManagementV1CountChromeAppRequestsResponse;
    public ChromemanagementCustomersAppsCountChromeAppRequestsResponse withGoogleChromeManagementV1CountChromeAppRequestsResponse(openapisdk.models.shared.GoogleChromeManagementV1CountChromeAppRequestsResponse googleChromeManagementV1CountChromeAppRequestsResponse) {
        this.googleChromeManagementV1CountChromeAppRequestsResponse = googleChromeManagementV1CountChromeAppRequestsResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersAppsCountChromeAppRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}