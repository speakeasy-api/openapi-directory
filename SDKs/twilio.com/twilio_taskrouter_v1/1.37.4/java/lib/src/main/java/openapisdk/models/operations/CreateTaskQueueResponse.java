package openapisdk.models.operations;



public class CreateTaskQueueResponse {
    public String contentType;
    public CreateTaskQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTaskQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue;
    public CreateTaskQueueResponse withTaskrouterV1WorkspaceTaskQueue(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue) {
        this.taskrouterV1WorkspaceTaskQueue = taskrouterV1WorkspaceTaskQueue;
        return this;
    }
}