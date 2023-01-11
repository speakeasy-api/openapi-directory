package openapisdk.models.operations;



public class DeepLinksResponse {
    public String contentType;
    public DeepLinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String deepLinks200ApplicationJSONString;
    public DeepLinksResponse withDeepLinks200ApplicationJsonString(String deepLinks200ApplicationJSONString) {
        this.deepLinks200ApplicationJSONString = deepLinks200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public DeepLinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}