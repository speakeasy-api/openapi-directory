package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersGetResponse {
    public String contentType;
    public EventarcProjectsLocationsTriggersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsTriggersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Trigger trigger;
    public EventarcProjectsLocationsTriggersGetResponse withTrigger(openapisdk.models.shared.Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}