package openapisdk.models.operations;



public class ReloadAllDatasourcesAllNodesResponse {
    public String contentType;
    public ReloadAllDatasourcesAllNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ReloadAllDatasourcesAllNodes200ApplicationJson reloadAllDatasourcesAllNodes200ApplicationJSONObject;
    public ReloadAllDatasourcesAllNodesResponse withReloadAllDatasourcesAllNodes200ApplicationJsonObject(ReloadAllDatasourcesAllNodes200ApplicationJson reloadAllDatasourcesAllNodes200ApplicationJSONObject) {
        this.reloadAllDatasourcesAllNodes200ApplicationJSONObject = reloadAllDatasourcesAllNodes200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public ReloadAllDatasourcesAllNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}