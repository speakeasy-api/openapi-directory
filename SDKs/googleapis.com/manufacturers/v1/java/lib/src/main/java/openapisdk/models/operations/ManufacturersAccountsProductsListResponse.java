package openapisdk.models.operations;



public class ManufacturersAccountsProductsListResponse {
    public String contentType;
    public ManufacturersAccountsProductsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProductsResponse listProductsResponse;
    public ManufacturersAccountsProductsListResponse withListProductsResponse(openapisdk.models.shared.ListProductsResponse listProductsResponse) {
        this.listProductsResponse = listProductsResponse;
        return this;
    }
    public Long statusCode;
    public ManufacturersAccountsProductsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}