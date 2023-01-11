package openapisdk.models.operations;



public class EventarcProjectsLocationsChannelConnectionsListResponse {
    public String contentType;
    public EventarcProjectsLocationsChannelConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListChannelConnectionsResponse listChannelConnectionsResponse;
    public EventarcProjectsLocationsChannelConnectionsListResponse withListChannelConnectionsResponse(openapisdk.models.shared.ListChannelConnectionsResponse listChannelConnectionsResponse) {
        this.listChannelConnectionsResponse = listChannelConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsChannelConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}