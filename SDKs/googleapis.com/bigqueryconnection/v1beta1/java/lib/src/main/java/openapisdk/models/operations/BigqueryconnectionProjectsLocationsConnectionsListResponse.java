package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsListResponse {
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse;
    public BigqueryconnectionProjectsLocationsConnectionsListResponse withListConnectionsResponse(openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse) {
        this.listConnectionsResponse = listConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}