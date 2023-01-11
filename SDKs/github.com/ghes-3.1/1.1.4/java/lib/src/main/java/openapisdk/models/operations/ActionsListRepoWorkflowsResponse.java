package openapisdk.models.operations;



public class ActionsListRepoWorkflowsResponse {
    public String contentType;
    public ActionsListRepoWorkflowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListRepoWorkflowsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListRepoWorkflowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListRepoWorkflows200ApplicationJson actionsListRepoWorkflows200ApplicationJSONObject;
    public ActionsListRepoWorkflowsResponse withActionsListRepoWorkflows200ApplicationJsonObject(ActionsListRepoWorkflows200ApplicationJson actionsListRepoWorkflows200ApplicationJSONObject) {
        this.actionsListRepoWorkflows200ApplicationJSONObject = actionsListRepoWorkflows200ApplicationJSONObject;
        return this;
    }
}