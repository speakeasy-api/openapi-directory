package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HomegraphDevicesReportStateAndNotificationRequest {
    public HomegraphDevicesReportStateAndNotificationQueryParams queryParams;
    public HomegraphDevicesReportStateAndNotificationRequest withQueryParams(HomegraphDevicesReportStateAndNotificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportStateAndNotificationRequest request;
    public HomegraphDevicesReportStateAndNotificationRequest withRequest(openapisdk.models.shared.ReportStateAndNotificationRequest request) {
        this.request = request;
        return this;
    }
    public HomegraphDevicesReportStateAndNotificationSecurity security;
    public HomegraphDevicesReportStateAndNotificationRequest withSecurity(HomegraphDevicesReportStateAndNotificationSecurity security) {
        this.security = security;
        return this;
    }
}