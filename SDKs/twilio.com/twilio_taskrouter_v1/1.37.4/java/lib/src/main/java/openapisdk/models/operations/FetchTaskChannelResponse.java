package openapisdk.models.operations;



public class FetchTaskChannelResponse {
    public String contentType;
    public FetchTaskChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel;
    public FetchTaskChannelResponse withTaskrouterV1WorkspaceTaskChannel(openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel) {
        this.taskrouterV1WorkspaceTaskChannel = taskrouterV1WorkspaceTaskChannel;
        return this;
    }
}