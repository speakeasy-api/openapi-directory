package openapisdk.models.operations;



public class ReloadGroupsResponse {
    public String contentType;
    public ReloadGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadGroups200ApplicationJson reloadGroups200ApplicationJSONObject;
    public ReloadGroupsResponse withReloadGroups200ApplicationJsonObject(ReloadGroups200ApplicationJson reloadGroups200ApplicationJSONObject) {
        this.reloadGroups200ApplicationJSONObject = reloadGroups200ApplicationJSONObject;
        return this;
    }
}