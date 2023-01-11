package openapisdk.models.operations;



public class FetchWorkerResponse {
    public String contentType;
    public FetchWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker;
    public FetchWorkerResponse withTaskrouterV1WorkspaceWorker(openapisdk.models.shared.TaskrouterV1WorkspaceWorker taskrouterV1WorkspaceWorker) {
        this.taskrouterV1WorkspaceWorker = taskrouterV1WorkspaceWorker;
        return this;
    }
}