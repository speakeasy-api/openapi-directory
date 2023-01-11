package openapisdk.models.operations;



public class ActionsListJobsForWorkflowRunResponse {
    public String contentType;
    public ActionsListJobsForWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListJobsForWorkflowRunResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListJobsForWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListJobsForWorkflowRun200ApplicationJson actionsListJobsForWorkflowRun200ApplicationJSONObject;
    public ActionsListJobsForWorkflowRunResponse withActionsListJobsForWorkflowRun200ApplicationJsonObject(ActionsListJobsForWorkflowRun200ApplicationJson actionsListJobsForWorkflowRun200ApplicationJSONObject) {
        this.actionsListJobsForWorkflowRun200ApplicationJSONObject = actionsListJobsForWorkflowRun200ApplicationJSONObject;
        return this;
    }
}