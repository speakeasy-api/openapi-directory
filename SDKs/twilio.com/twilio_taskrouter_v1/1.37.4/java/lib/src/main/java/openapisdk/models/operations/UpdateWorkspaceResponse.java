package openapisdk.models.operations;



public class UpdateWorkspaceResponse {
    public String contentType;
    public UpdateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1Workspace taskrouterV1Workspace;
    public UpdateWorkspaceResponse withTaskrouterV1Workspace(openapisdk.models.shared.TaskrouterV1Workspace taskrouterV1Workspace) {
        this.taskrouterV1Workspace = taskrouterV1Workspace;
        return this;
    }
}