package openapisdk.models.operations;



public class GetShopScriptTagResponse {
    public String contentType;
    public GetShopScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetShopScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetShopScriptTag200ApplicationJson getShopScriptTag200ApplicationJSONObject;
    public GetShopScriptTagResponse withGetShopScriptTag200ApplicationJsonObject(GetShopScriptTag200ApplicationJson getShopScriptTag200ApplicationJSONObject) {
        this.getShopScriptTag200ApplicationJSONObject = getShopScriptTag200ApplicationJSONObject;
        return this;
    }
}