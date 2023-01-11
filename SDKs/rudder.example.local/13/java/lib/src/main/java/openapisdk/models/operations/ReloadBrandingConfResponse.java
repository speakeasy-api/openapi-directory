package openapisdk.models.operations;



public class ReloadBrandingConfResponse {
    public String contentType;
    public ReloadBrandingConfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadBrandingConfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadBrandingConf200ApplicationJson reloadBrandingConf200ApplicationJSONObject;
    public ReloadBrandingConfResponse withReloadBrandingConf200ApplicationJsonObject(ReloadBrandingConf200ApplicationJson reloadBrandingConf200ApplicationJSONObject) {
        this.reloadBrandingConf200ApplicationJSONObject = reloadBrandingConf200ApplicationJSONObject;
        return this;
    }
}