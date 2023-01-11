package openapisdk.models.operations;



public class ProductsApiCountResponse {
    public String contentType;
    public ProductsApiCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productsApiCount200ApplicationJSONOneOf;
    public ProductsApiCountResponse withProductsApiCount200ApplicationJsonOneOf(Object productsApiCount200ApplicationJSONOneOf) {
        this.productsApiCount200ApplicationJSONOneOf = productsApiCount200ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public ProductsApiCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}