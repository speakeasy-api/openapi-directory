package openapisdk.models.operations;



public class Area120tablesWorkspacesListResponse {
    public String contentType;
    public Area120tablesWorkspacesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWorkspacesResponse listWorkspacesResponse;
    public Area120tablesWorkspacesListResponse withListWorkspacesResponse(openapisdk.models.shared.ListWorkspacesResponse listWorkspacesResponse) {
        this.listWorkspacesResponse = listWorkspacesResponse;
        return this;
    }
    public Long statusCode;
    public Area120tablesWorkspacesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}