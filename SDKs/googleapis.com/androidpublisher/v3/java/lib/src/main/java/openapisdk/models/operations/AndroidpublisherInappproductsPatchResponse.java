package openapisdk.models.operations;



public class AndroidpublisherInappproductsPatchResponse {
    public String contentType;
    public AndroidpublisherInappproductsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InAppProduct inAppProduct;
    public AndroidpublisherInappproductsPatchResponse withInAppProduct(openapisdk.models.shared.InAppProduct inAppProduct) {
        this.inAppProduct = inAppProduct;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherInappproductsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}