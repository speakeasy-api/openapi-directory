package openapisdk.models.operations;



public class UpdateShopScriptTagResponse {
    public String contentType;
    public UpdateShopScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateShopScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateShopScriptTag200ApplicationJson updateShopScriptTag200ApplicationJSONObject;
    public UpdateShopScriptTagResponse withUpdateShopScriptTag200ApplicationJsonObject(UpdateShopScriptTag200ApplicationJson updateShopScriptTag200ApplicationJSONObject) {
        this.updateShopScriptTag200ApplicationJSONObject = updateShopScriptTag200ApplicationJSONObject;
        return this;
    }
}