package openapisdk.models.operations;



public class UpdateWorkerChannelResponse {
    public String contentType;
    public UpdateWorkerChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkerChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel taskrouterV1WorkspaceWorkerWorkerChannel;
    public UpdateWorkerChannelResponse withTaskrouterV1WorkspaceWorkerWorkerChannel(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel taskrouterV1WorkspaceWorkerWorkerChannel) {
        this.taskrouterV1WorkspaceWorkerWorkerChannel = taskrouterV1WorkspaceWorkerWorkerChannel;
        return this;
    }
}