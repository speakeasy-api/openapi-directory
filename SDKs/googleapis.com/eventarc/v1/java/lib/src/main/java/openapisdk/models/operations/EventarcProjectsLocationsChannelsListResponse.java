package openapisdk.models.operations;



public class EventarcProjectsLocationsChannelsListResponse {
    public String contentType;
    public EventarcProjectsLocationsChannelsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public EventarcProjectsLocationsChannelsListResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsChannelsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}