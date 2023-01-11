package openapisdk.models.operations;



public class UpdateWorkerResponse {
    public String contentType;
    public UpdateWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker;
    public UpdateWorkerResponse withTaskrouterV1WorkspaceWorker(openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker) {
        this.taskrouterV1WorkspaceWorker = taskrouterV1WorkspaceWorker;
        return this;
    }
}