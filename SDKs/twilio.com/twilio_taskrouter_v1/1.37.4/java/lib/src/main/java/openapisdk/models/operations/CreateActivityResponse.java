package openapisdk.models.operations;



public class CreateActivityResponse {
    public String contentType;
    public CreateActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity;
    public CreateActivityResponse withTaskrouterV1WorkspaceActivity(openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity) {
        this.taskrouterV1WorkspaceActivity = taskrouterV1WorkspaceActivity;
        return this;
    }
}