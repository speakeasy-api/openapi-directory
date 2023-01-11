package openapisdk.models.operations;



public class ActionsListWorkflowRunsResponse {
    public String contentType;
    public ActionsListWorkflowRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListWorkflowRunsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListWorkflowRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListWorkflowRuns200ApplicationJson actionsListWorkflowRuns200ApplicationJSONObject;
    public ActionsListWorkflowRunsResponse withActionsListWorkflowRuns200ApplicationJsonObject(ActionsListWorkflowRuns200ApplicationJson actionsListWorkflowRuns200ApplicationJSONObject) {
        this.actionsListWorkflowRuns200ApplicationJSONObject = actionsListWorkflowRuns200ApplicationJSONObject;
        return this;
    }
}