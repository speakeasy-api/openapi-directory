package openapisdk.models.operations;



public class AndroidpublisherInappproductsInsertResponse {
    public String contentType;
    public AndroidpublisherInappproductsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InAppProduct inAppProduct;
    public AndroidpublisherInappproductsInsertResponse withInAppProduct(openapisdk.models.shared.InAppProduct inAppProduct) {
        this.inAppProduct = inAppProduct;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInappproductsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}