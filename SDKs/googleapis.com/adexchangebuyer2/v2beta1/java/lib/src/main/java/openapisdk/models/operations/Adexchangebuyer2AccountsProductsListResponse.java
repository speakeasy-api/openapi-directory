package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProductsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProductsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProductsResponse listProductsResponse;
    public Adexchangebuyer2AccountsProductsListResponse withListProductsResponse(openapisdk.models.shared.ListProductsResponse listProductsResponse) {
        this.listProductsResponse = listProductsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProductsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}