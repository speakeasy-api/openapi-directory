package openapisdk.models.operations;



public class ReloadAllResponse {
    public String contentType;
    public ReloadAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadAll200ApplicationJson reloadAll200ApplicationJSONObject;
    public ReloadAllResponse withReloadAll200ApplicationJsonObject(ReloadAll200ApplicationJson reloadAll200ApplicationJSONObject) {
        this.reloadAll200ApplicationJSONObject = reloadAll200ApplicationJSONObject;
        return this;
    }
}