package openapisdk.models.operations;



public class ReloadUserConfResponse {
    public String contentType;
    public ReloadUserConfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadUserConfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadUserConf200ApplicationJson reloadUserConf200ApplicationJSONObject;
    public ReloadUserConfResponse withReloadUserConf200ApplicationJsonObject(ReloadUserConf200ApplicationJson reloadUserConf200ApplicationJSONObject) {
        this.reloadUserConf200ApplicationJSONObject = reloadUserConf200ApplicationJSONObject;
        return this;
    }
}