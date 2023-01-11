package openapisdk.models.operations;



public class ActionsListRepoSecretsResponse {
    public String contentType;
    public ActionsListRepoSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListRepoSecretsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListRepoSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListRepoSecrets200ApplicationJson actionsListRepoSecrets200ApplicationJSONObject;
    public ActionsListRepoSecretsResponse withActionsListRepoSecrets200ApplicationJsonObject(ActionsListRepoSecrets200ApplicationJson actionsListRepoSecrets200ApplicationJSONObject) {
        this.actionsListRepoSecrets200ApplicationJSONObject = actionsListRepoSecrets200ApplicationJSONObject;
        return this;
    }
}