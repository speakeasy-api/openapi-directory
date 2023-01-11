package openapisdk.models.operations;



public class MonitoringProjectsSnoozesCreateResponse {
    public String contentType;
    public MonitoringProjectsSnoozesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Snooze snooze;
    public MonitoringProjectsSnoozesCreateResponse withSnooze(openapisdk.models.shared.Snooze snooze) {
        this.snooze = snooze;
        return this;
    }
    public Long statusCode;
    public MonitoringProjectsSnoozesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}