package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersListResponse {
    public String contentType;
    public EventarcProjectsLocationsTriggersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTriggersResponse listTriggersResponse;
    public EventarcProjectsLocationsTriggersListResponse withListTriggersResponse(openapisdk.models.shared.ListTriggersResponse listTriggersResponse) {
        this.listTriggersResponse = listTriggersResponse;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsTriggersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}