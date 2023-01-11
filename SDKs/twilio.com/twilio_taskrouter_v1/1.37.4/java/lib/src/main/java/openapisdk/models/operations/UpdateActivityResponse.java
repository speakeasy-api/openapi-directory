package openapisdk.models.operations;



public class UpdateActivityResponse {
    public String contentType;
    public UpdateActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity;
    public UpdateActivityResponse withTaskrouterV1WorkspaceActivity(openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity) {
        this.taskrouterV1WorkspaceActivity = taskrouterV1WorkspaceActivity;
        return this;
    }
}