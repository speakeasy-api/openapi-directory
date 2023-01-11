package openapisdk.models.operations;



public class DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse {
    public String contentType;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRoutesResponse listRoutesResponse;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse withListRoutesResponse(openapisdk.models.shared.ListRoutesResponse listRoutesResponse) {
        this.listRoutesResponse = listRoutesResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}