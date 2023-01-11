package openapisdk.models.operations;



public class ProductResponse {
    public String contentType;
    public ProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Product200ApplicationJson product200ApplicationJSONObject;
    public ProductResponse withProduct200ApplicationJsonObject(Product200ApplicationJson product200ApplicationJSONObject) {
        this.product200ApplicationJSONObject = product200ApplicationJSONObject;
        return this;
    }
}