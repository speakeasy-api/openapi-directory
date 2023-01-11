package openapisdk.models.operations;



public class ProductsApiSaveResponse {
    public String contentType;
    public ProductsApiSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productsApiSave201ApplicationJSONOneOf;
    public ProductsApiSaveResponse withProductsApiSave201ApplicationJsonOneOf(Object productsApiSave201ApplicationJSONOneOf) {
        this.productsApiSave201ApplicationJSONOneOf = productsApiSave201ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public ProductsApiSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}