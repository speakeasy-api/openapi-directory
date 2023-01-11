package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuntimeActionSchemasResponse listRuntimeActionSchemasResponse;
    public ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse withListRuntimeActionSchemasResponse(openapisdk.models.shared.ListRuntimeActionSchemasResponse listRuntimeActionSchemasResponse) {
        this.listRuntimeActionSchemasResponse = listRuntimeActionSchemasResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}