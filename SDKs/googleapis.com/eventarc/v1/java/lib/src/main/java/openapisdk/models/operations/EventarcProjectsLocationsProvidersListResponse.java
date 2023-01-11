package openapisdk.models.operations;



public class EventarcProjectsLocationsProvidersListResponse {
    public String contentType;
    public EventarcProjectsLocationsProvidersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProvidersResponse listProvidersResponse;
    public EventarcProjectsLocationsProvidersListResponse withListProvidersResponse(openapisdk.models.shared.ListProvidersResponse listProvidersResponse) {
        this.listProvidersResponse = listProvidersResponse;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsProvidersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}