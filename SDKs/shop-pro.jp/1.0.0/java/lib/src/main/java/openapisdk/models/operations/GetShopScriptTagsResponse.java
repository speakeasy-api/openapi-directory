package openapisdk.models.operations;



public class GetShopScriptTagsResponse {
    public String contentType;
    public GetShopScriptTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetShopScriptTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetShopScriptTags200ApplicationJson getShopScriptTags200ApplicationJSONObject;
    public GetShopScriptTagsResponse withGetShopScriptTags200ApplicationJsonObject(GetShopScriptTags200ApplicationJson getShopScriptTags200ApplicationJSONObject) {
        this.getShopScriptTags200ApplicationJSONObject = getShopScriptTags200ApplicationJSONObject;
        return this;
    }
}