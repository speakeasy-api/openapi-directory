package openapisdk.models.operations;



public class UpdateTaskChannelResponse {
    public String contentType;
    public UpdateTaskChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel;
    public UpdateTaskChannelResponse withTaskrouterV1WorkspaceTaskChannel(openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel) {
        this.taskrouterV1WorkspaceTaskChannel = taskrouterV1WorkspaceTaskChannel;
        return this;
    }
}