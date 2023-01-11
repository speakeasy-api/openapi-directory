package openapisdk.models.operations;



public class ChromemanagementCustomersReportsCountChromeVersionsResponse {
    public String contentType;
    public ChromemanagementCustomersReportsCountChromeVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1CountChromeVersionsResponse googleChromeManagementV1CountChromeVersionsResponse;
    public ChromemanagementCustomersReportsCountChromeVersionsResponse withGoogleChromeManagementV1CountChromeVersionsResponse(openapisdk.models.shared.GoogleChromeManagementV1CountChromeVersionsResponse googleChromeManagementV1CountChromeVersionsResponse) {
        this.googleChromeManagementV1CountChromeVersionsResponse = googleChromeManagementV1CountChromeVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersReportsCountChromeVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}