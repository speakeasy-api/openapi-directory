package openapisdk.models.operations;



public class ActionsListSelfHostedRunnersForRepoResponse {
    public String contentType;
    public ActionsListSelfHostedRunnersForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListSelfHostedRunnersForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListSelfHostedRunnersForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListSelfHostedRunnersForRepo200ApplicationJson actionsListSelfHostedRunnersForRepo200ApplicationJSONObject;
    public ActionsListSelfHostedRunnersForRepoResponse withActionsListSelfHostedRunnersForRepo200ApplicationJsonObject(ActionsListSelfHostedRunnersForRepo200ApplicationJson actionsListSelfHostedRunnersForRepo200ApplicationJSONObject) {
        this.actionsListSelfHostedRunnersForRepo200ApplicationJSONObject = actionsListSelfHostedRunnersForRepo200ApplicationJSONObject;
        return this;
    }
}