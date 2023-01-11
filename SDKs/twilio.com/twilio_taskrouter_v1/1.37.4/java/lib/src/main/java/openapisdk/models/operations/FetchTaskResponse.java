package openapisdk.models.operations;



public class FetchTaskResponse {
    public String contentType;
    public FetchTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTask taskrouterV1WorkspaceTask;
    public FetchTaskResponse withTaskrouterV1WorkspaceTask(openapisdk.models.shared.TaskrouterV1WorkspaceTask taskrouterV1WorkspaceTask) {
        this.taskrouterV1WorkspaceTask = taskrouterV1WorkspaceTask;
        return this;
    }
}