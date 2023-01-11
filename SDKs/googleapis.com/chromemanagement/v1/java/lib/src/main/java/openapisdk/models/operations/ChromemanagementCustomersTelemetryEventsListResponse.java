package openapisdk.models.operations;



public class ChromemanagementCustomersTelemetryEventsListResponse {
    public String contentType;
    public ChromemanagementCustomersTelemetryEventsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryEventsResponse googleChromeManagementV1ListTelemetryEventsResponse;
    public ChromemanagementCustomersTelemetryEventsListResponse withGoogleChromeManagementV1ListTelemetryEventsResponse(openapisdk.models.shared.GoogleChromeManagementV1ListTelemetryEventsResponse googleChromeManagementV1ListTelemetryEventsResponse) {
        this.googleChromeManagementV1ListTelemetryEventsResponse = googleChromeManagementV1ListTelemetryEventsResponse;
        return this;
    }
    public Long statusCode;
    public ChromemanagementCustomersTelemetryEventsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}