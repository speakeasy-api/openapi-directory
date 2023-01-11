package openapisdk.models.operations;



public class ReloadGroupResponse {
    public String contentType;
    public ReloadGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadGroup200ApplicationJson reloadGroup200ApplicationJSONObject;
    public ReloadGroupResponse withReloadGroup200ApplicationJsonObject(ReloadGroup200ApplicationJson reloadGroup200ApplicationJSONObject) {
        this.reloadGroup200ApplicationJSONObject = reloadGroup200ApplicationJSONObject;
        return this;
    }
}