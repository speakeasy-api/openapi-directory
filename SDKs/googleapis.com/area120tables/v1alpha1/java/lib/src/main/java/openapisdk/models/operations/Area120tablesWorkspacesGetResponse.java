package openapisdk.models.operations;



public class Area120tablesWorkspacesGetResponse {
    public String contentType;
    public Area120tablesWorkspacesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Area120tablesWorkspacesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Workspace workspace;
    public Area120tablesWorkspacesGetResponse withWorkspace(openapisdk.models.shared.Workspace workspace) {
        this.workspace = workspace;
        return this;
    }
}