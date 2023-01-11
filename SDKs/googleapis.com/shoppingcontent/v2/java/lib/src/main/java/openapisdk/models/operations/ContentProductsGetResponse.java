package openapisdk.models.operations;



public class ContentProductsGetResponse {
    public String contentType;
    public ContentProductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public ContentProductsGetResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public ContentProductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}