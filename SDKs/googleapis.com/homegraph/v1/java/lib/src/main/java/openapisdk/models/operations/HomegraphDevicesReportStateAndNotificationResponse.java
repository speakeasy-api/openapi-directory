package openapisdk.models.operations;



public class HomegraphDevicesReportStateAndNotificationResponse {
    public String contentType;
    public HomegraphDevicesReportStateAndNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReportStateAndNotificationResponse reportStateAndNotificationResponse;
    public HomegraphDevicesReportStateAndNotificationResponse withReportStateAndNotificationResponse(openapisdk.models.shared.ReportStateAndNotificationResponse reportStateAndNotificationResponse) {
        this.reportStateAndNotificationResponse = reportStateAndNotificationResponse;
        return this;
    }
    public Long statusCode;
    public HomegraphDevicesReportStateAndNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}