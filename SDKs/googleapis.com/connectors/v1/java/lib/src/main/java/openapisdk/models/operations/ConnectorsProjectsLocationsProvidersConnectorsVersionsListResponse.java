package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectorVersionsResponse listConnectorVersionsResponse;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse withListConnectorVersionsResponse(openapisdk.models.shared.ListConnectorVersionsResponse listConnectorVersionsResponse) {
        this.listConnectorVersionsResponse = listConnectorVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}