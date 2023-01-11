package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuntimeEntitySchemasResponse listRuntimeEntitySchemasResponse;
    public ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse withListRuntimeEntitySchemasResponse(openapisdk.models.shared.ListRuntimeEntitySchemasResponse listRuntimeEntitySchemasResponse) {
        this.listRuntimeEntitySchemasResponse = listRuntimeEntitySchemasResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}