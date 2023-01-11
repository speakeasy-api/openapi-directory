package openapisdk.models.operations;



public class FetchAlertResponse {
    public String contentType;
    public FetchAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MonitorV1AlertInstance monitorV1AlertInstance;
    public FetchAlertResponse withMonitorV1AlertInstance(openapisdk.models.shared.MonitorV1AlertInstance monitorV1AlertInstance) {
        this.monitorV1AlertInstance = monitorV1AlertInstance;
        return this;
    }
}