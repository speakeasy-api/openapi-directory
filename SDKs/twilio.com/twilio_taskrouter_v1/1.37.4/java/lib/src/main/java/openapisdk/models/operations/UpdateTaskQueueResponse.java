package openapisdk.models.operations;



public class UpdateTaskQueueResponse {
    public String contentType;
    public UpdateTaskQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue;
    public UpdateTaskQueueResponse withTaskrouterV1WorkspaceTaskQueue(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue) {
        this.taskrouterV1WorkspaceTaskQueue = taskrouterV1WorkspaceTaskQueue;
        return this;
    }
}