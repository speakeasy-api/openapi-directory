package openapisdk.models.operations;



public class FetchActivityResponse {
    public String contentType;
    public FetchActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity;
    public FetchActivityResponse withTaskrouterV1WorkspaceActivity(openapisdk.models.shared.TaskrouterV1WorkspaceActivity taskrouterV1WorkspaceActivity) {
        this.taskrouterV1WorkspaceActivity = taskrouterV1WorkspaceActivity;
        return this;
    }
}