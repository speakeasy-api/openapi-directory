package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProductsGetResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public Adexchangebuyer2AccountsProductsGetResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}