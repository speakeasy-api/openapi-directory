package openapisdk.models.operations;



public class CreateTaskChannelResponse {
    public String contentType;
    public CreateTaskChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTaskChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel;
    public CreateTaskChannelResponse withTaskrouterV1WorkspaceTaskChannel(openapisdk.models.shared.TaskrouterV1WorkspaceTaskChannel taskrouterV1WorkspaceTaskChannel) {
        this.taskrouterV1WorkspaceTaskChannel = taskrouterV1WorkspaceTaskChannel;
        return this;
    }
}