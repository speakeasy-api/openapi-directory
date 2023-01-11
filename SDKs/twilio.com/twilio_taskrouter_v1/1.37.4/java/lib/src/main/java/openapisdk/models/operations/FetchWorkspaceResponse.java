package openapisdk.models.operations;



public class FetchWorkspaceResponse {
    public String contentType;
    public FetchWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1Workspace taskrouterV1Workspace;
    public FetchWorkspaceResponse withTaskrouterV1Workspace(openapisdk.models.shared.TaskrouterV1Workspace taskrouterV1Workspace) {
        this.taskrouterV1Workspace = taskrouterV1Workspace;
        return this;
    }
}