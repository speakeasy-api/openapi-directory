package openapisdk.models.operations;



public class ContentProductsInsertResponse {
    public String contentType;
    public ContentProductsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public ContentProductsInsertResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public ContentProductsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}