package openapisdk.models.operations;



public class ReloadOneDatasourceAllNodesResponse {
    public String contentType;
    public ReloadOneDatasourceAllNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ReloadOneDatasourceAllNodes200ApplicationJson reloadOneDatasourceAllNodes200ApplicationJSONObject;
    public ReloadOneDatasourceAllNodesResponse withReloadOneDatasourceAllNodes200ApplicationJsonObject(ReloadOneDatasourceAllNodes200ApplicationJson reloadOneDatasourceAllNodes200ApplicationJSONObject) {
        this.reloadOneDatasourceAllNodes200ApplicationJSONObject = reloadOneDatasourceAllNodes200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public ReloadOneDatasourceAllNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}