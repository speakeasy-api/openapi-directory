package openapisdk.models.operations;



public class JobsProjectsTenantsClientEventsCreateResponse {
    public openapisdk.models.shared.ClientEvent clientEvent;
    public JobsProjectsTenantsClientEventsCreateResponse withClientEvent(openapisdk.models.shared.ClientEvent clientEvent) {
        this.clientEvent = clientEvent;
        return this;
    }
    public String contentType;
    public JobsProjectsTenantsClientEventsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsClientEventsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}