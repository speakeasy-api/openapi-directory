package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsActionsListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsActionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListActionsResponse listActionsResponse;
    public ConnectorsProjectsLocationsConnectionsActionsListResponse withListActionsResponse(openapisdk.models.shared.ListActionsResponse listActionsResponse) {
        this.listActionsResponse = listActionsResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsActionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}