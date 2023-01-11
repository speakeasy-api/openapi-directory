package openapisdk.models.operations;



public class ChromemanagementCustomersTelemetryDevicesListResponse {
    public String contentType;
    public ChromemanagementCustomersTelemetryDevicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryDevicesResponse googleChromeManagementV1ListTelemetryDevicesResponse;
    public ChromemanagementCustomersTelemetryDevicesListResponse withGoogleChromeManagementV1ListTelemetryDevicesResponse(openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryDevicesResponse googleChromeManagementV1ListTelemetryDevicesResponse) {
        this.googleChromeManagementV1ListTelemetryDevicesResponse = googleChromeManagementV1ListTelemetryDevicesResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersTelemetryDevicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}