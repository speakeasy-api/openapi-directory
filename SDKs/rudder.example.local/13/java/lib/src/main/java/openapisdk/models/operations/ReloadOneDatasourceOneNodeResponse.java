package openapisdk.models.operations;



public class ReloadOneDatasourceOneNodeResponse {
    public String contentType;
    public ReloadOneDatasourceOneNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ReloadOneDatasourceOneNode200ApplicationJson reloadOneDatasourceOneNode200ApplicationJSONObject;
    public ReloadOneDatasourceOneNodeResponse withReloadOneDatasourceOneNode200ApplicationJsonObject(ReloadOneDatasourceOneNode200ApplicationJson reloadOneDatasourceOneNode200ApplicationJSONObject) {
        this.reloadOneDatasourceOneNode200ApplicationJSONObject = reloadOneDatasourceOneNode200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public ReloadOneDatasourceOneNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}