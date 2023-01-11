package openapisdk.models.operations;



public class CreateWorkerResponse {
    public String contentType;
    public CreateWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker;
    public CreateWorkerResponse withTaskrouterV1WorkspaceWorker(openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker) {
        this.taskrouterV1WorkspaceWorker = taskrouterV1WorkspaceWorker;
        return this;
    }
}