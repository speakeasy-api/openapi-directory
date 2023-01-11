package openapisdk.models.operations;



public class PostServersIdActionsEnableBackupResponse {
    public PostServersIdActionsEnableBackupActionResponse actionResponse;
    public PostServersIdActionsEnableBackupResponse withActionResponse(PostServersIdActionsEnableBackupActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsEnableBackupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsEnableBackupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}