package openapisdk.models.operations;



public class PostServersIdActionsDisableBackupResponse {
    public PostServersIdActionsDisableBackupActionResponse actionResponse;
    public PostServersIdActionsDisableBackupResponse withActionResponse(PostServersIdActionsDisableBackupActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsDisableBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsDisableBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}