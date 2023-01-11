package openapisdk.models.operations;



public class FetchWorkerChannelResponse {
    public String contentType;
    public FetchWorkerChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkerChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel taskrouterV1WorkspaceWorkerWorkerChannel;
    public FetchWorkerChannelResponse withTaskrouterV1WorkspaceWorkerWorkerChannel(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerChannel taskrouterV1WorkspaceWorkerWorkerChannel) {
        this.taskrouterV1WorkspaceWorkerWorkerChannel = taskrouterV1WorkspaceWorkerWorkerChannel;
        return this;
    }
}