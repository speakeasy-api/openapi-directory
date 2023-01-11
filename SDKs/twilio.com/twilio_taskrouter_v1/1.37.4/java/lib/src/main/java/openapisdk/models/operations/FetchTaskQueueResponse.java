package openapisdk.models.operations;



public class FetchTaskQueueResponse {
    public String contentType;
    public FetchTaskQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue;
    public FetchTaskQueueResponse withTaskrouterV1WorkspaceTaskQueue(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueue taskrouterV1WorkspaceTaskQueue) {
        this.taskrouterV1WorkspaceTaskQueue = taskrouterV1WorkspaceTaskQueue;
        return this;
    }
}