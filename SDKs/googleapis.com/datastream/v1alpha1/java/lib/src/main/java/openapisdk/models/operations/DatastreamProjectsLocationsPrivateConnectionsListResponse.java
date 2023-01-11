package openapisdk.models.operations;



public class DatastreamProjectsLocationsPrivateConnectionsListResponse {
    public String contentType;
    public DatastreamProjectsLocationsPrivateConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPrivateConnectionsResponse listPrivateConnectionsResponse;
    public DatastreamProjectsLocationsPrivateConnectionsListResponse withListPrivateConnectionsResponse(openapisdk.models.shared.ListPrivateConnectionsResponse listPrivateConnectionsResponse) {
        this.listPrivateConnectionsResponse = listPrivateConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsPrivateConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}