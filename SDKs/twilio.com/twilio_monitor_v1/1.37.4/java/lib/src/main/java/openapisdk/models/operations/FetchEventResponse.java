package openapisdk.models.operations;



public class FetchEventResponse {
    public String contentType;
    public FetchEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MonitorV1Event monitorV1Event;
    public FetchEventResponse withMonitorV1Event(openapisdk.models.shared.MonitorV1Event monitorV1Event) {
        this.monitorV1Event = monitorV1Event;
        return this;
    }
}