package openapisdk.models.operations;



public class ChromemanagementCustomersTelemetryDevicesGetResponse {
    public String contentType;
    public ChromemanagementCustomersTelemetryDevicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1TelemetryDevice googleChromeManagementV1TelemetryDevice;
    public ChromemanagementCustomersTelemetryDevicesGetResponse withGoogleChromeManagementV1TelemetryDevice(openapisdk.models.shared.GoogleChromeManagementV1TelemetryDevice googleChromeManagementV1TelemetryDevice) {
        this.googleChromeManagementV1TelemetryDevice = googleChromeManagementV1TelemetryDevice;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersTelemetryDevicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}