package openapisdk.models.operations;



public class ReloadAllDatasourcesOneNodeResponse {
    public String contentType;
    public ReloadAllDatasourcesOneNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ReloadAllDatasourcesOneNode200ApplicationJson reloadAllDatasourcesOneNode200ApplicationJSONObject;
    public ReloadAllDatasourcesOneNodeResponse withReloadAllDatasourcesOneNode200ApplicationJsonObject(ReloadAllDatasourcesOneNode200ApplicationJson reloadAllDatasourcesOneNode200ApplicationJSONObject) {
        this.reloadAllDatasourcesOneNode200ApplicationJSONObject = reloadAllDatasourcesOneNode200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public ReloadAllDatasourcesOneNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}