package openapisdk.models.operations;



public class ContentShippingsettingsGetResponse {
    public String contentType;
    public ContentShippingsettingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingSettings shippingSettings;
    public ContentShippingsettingsGetResponse withShippingSettings(openapisdk.models.shared.ShippingSettings shippingSettings) {
        this.shippingSettings = shippingSettings;
        return this;
    }
    public Long statusCode;
    public ContentShippingsettingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}