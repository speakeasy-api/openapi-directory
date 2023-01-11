package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEntitiesResponse listEntitiesResponse;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse withListEntitiesResponse(openapisdk.models.shared.ListEntitiesResponse listEntitiesResponse) {
        this.listEntitiesResponse = listEntitiesResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}