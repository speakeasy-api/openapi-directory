package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsProvidersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProvidersResponse listProvidersResponse;
    public ConnectorsProjectsLocationsProvidersListResponse withListProvidersResponse(openapisdk.models.shared.ListProvidersResponse listProvidersResponse) {
        this.listProvidersResponse = listProvidersResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}