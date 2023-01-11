package openapisdk.models.operations;



public class AndroidpublisherInappproductsGetResponse {
    public String contentType;
    public AndroidpublisherInappproductsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InAppProduct inAppProduct;
    public AndroidpublisherInappproductsGetResponse withInAppProduct(openapisdk.models.shared.InAppProduct inAppProduct) {
        this.inAppProduct = inAppProduct;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInappproductsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}