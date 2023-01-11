package openapisdk.models.operations;



public class ProductsApiFindResponse {
    public String contentType;
    public ProductsApiFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productsApiFind200ApplicationJSONOneOf;
    public ProductsApiFindResponse withProductsApiFind200ApplicationJsonOneOf(Object productsApiFind200ApplicationJSONOneOf) {
        this.productsApiFind200ApplicationJSONOneOf = productsApiFind200ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public ProductsApiFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}