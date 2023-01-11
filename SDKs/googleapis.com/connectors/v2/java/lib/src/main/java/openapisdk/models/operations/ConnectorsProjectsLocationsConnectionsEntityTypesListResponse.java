package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsEntityTypesListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsEntityTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEntityTypesResponse listEntityTypesResponse;
    public ConnectorsProjectsLocationsConnectionsEntityTypesListResponse withListEntityTypesResponse(openapisdk.models.shared.ListEntityTypesResponse listEntityTypesResponse) {
        this.listEntityTypesResponse = listEntityTypesResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsEntityTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}