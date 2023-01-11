package openapisdk.models.operations;



public class AndroidpublisherPurchasesProductsGetResponse {
    public String contentType;
    public AndroidpublisherPurchasesProductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductPurchase productPurchase;
    public AndroidpublisherPurchasesProductsGetResponse withProductPurchase(openapisdk.models.shared.ProductPurchase productPurchase) {
        this.productPurchase = productPurchase;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherPurchasesProductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}