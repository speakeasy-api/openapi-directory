package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersConnectorsListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectorsResponse listConnectorsResponse;
    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withListConnectorsResponse(openapisdk.models.shared.ListConnectorsResponse listConnectorsResponse) {
        this.listConnectorsResponse = listConnectorsResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersConnectorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}