package openapisdk.models.operations;



public class JobsProjectsClientEventsCreateResponse {
    public openapisdk.models.shared.ClientEvent clientEvent;
    public JobsProjectsClientEventsCreateResponse withClientEvent(openapisdk.models.shared.ClientEvent clientEvent) {
        this.clientEvent = clientEvent;
        return this;
    }
    public String contentType;
    public JobsProjectsClientEventsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsClientEventsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}