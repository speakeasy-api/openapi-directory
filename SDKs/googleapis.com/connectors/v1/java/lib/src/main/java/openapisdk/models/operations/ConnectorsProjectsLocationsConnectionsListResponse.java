package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse;
    public ConnectorsProjectsLocationsConnectionsListResponse withListConnectionsResponse(openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse) {
        this.listConnectionsResponse = listConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}