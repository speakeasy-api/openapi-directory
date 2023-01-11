package openapisdk.models.operations;



public class ManufacturersAccountsProductsGetResponse {
    public String contentType;
    public ManufacturersAccountsProductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public ManufacturersAccountsProductsGetResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public ManufacturersAccountsProductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}