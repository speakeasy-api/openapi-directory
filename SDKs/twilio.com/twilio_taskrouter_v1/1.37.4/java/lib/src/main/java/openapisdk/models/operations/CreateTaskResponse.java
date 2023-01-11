package openapisdk.models.operations;



public class CreateTaskResponse {
    public String contentType;
    public CreateTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTask taskrouterV1WorkspaceTask;
    public CreateTaskResponse withTaskrouterV1WorkspaceTask(openapisdk.models.shared.TaskrouterV1WorkspaceTask taskrouterV1WorkspaceTask) {
        this.taskrouterV1WorkspaceTask = taskrouterV1WorkspaceTask;
        return this;
    }
}