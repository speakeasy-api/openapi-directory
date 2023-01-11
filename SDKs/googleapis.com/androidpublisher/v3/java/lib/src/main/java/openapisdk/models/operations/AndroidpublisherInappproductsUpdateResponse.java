package openapisdk.models.operations;



public class AndroidpublisherInappproductsUpdateResponse {
    public String contentType;
    public AndroidpublisherInappproductsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InAppProduct inAppProduct;
    public AndroidpublisherInappproductsUpdateResponse withInAppProduct(openapisdk.models.shared.InAppProduct inAppProduct) {
        this.inAppProduct = inAppProduct;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInappproductsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}