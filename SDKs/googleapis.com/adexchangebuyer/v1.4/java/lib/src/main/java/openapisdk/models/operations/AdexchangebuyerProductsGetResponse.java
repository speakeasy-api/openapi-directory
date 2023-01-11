package openapisdk.models.operations;



public class AdexchangebuyerProductsGetResponse {
    public String contentType;
    public AdexchangebuyerProductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public AdexchangebuyerProductsGetResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}