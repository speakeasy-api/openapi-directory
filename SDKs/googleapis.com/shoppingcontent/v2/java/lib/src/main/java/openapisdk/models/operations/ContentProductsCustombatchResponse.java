package openapisdk.models.operations;



public class ContentProductsCustombatchResponse {
    public String contentType;
    public ContentProductsCustombatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductsCustomBatchResponse productsCustomBatchResponse;
    public ContentProductsCustombatchResponse withProductsCustomBatchResponse(openapisdk.models.shared.ProductsCustomBatchResponse productsCustomBatchResponse) {
        this.productsCustomBatchResponse = productsCustomBatchResponse;
        return this;
    }
    public Long statusCode;
    public ContentProductsCustombatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}