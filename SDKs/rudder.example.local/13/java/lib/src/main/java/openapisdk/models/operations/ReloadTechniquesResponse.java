package openapisdk.models.operations;



public class ReloadTechniquesResponse {
    public String contentType;
    public ReloadTechniquesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadTechniquesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReloadTechniques200ApplicationJson reloadTechniques200ApplicationJSONObject;
    public ReloadTechniquesResponse withReloadTechniques200ApplicationJsonObject(ReloadTechniques200ApplicationJson reloadTechniques200ApplicationJSONObject) {
        this.reloadTechniques200ApplicationJSONObject = reloadTechniques200ApplicationJSONObject;
        return this;
    }
}