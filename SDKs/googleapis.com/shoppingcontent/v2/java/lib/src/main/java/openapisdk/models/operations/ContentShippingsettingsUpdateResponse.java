package openapisdk.models.operations;



public class ContentShippingsettingsUpdateResponse {
    public String contentType;
    public ContentShippingsettingsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingSettings shippingSettings;
    public ContentShippingsettingsUpdateResponse withShippingSettings(openapisdk.models.shared.ShippingSettings shippingSettings) {
        this.shippingSettings = shippingSettings;
        return this;
    }
    public Long statusCode;
    public ContentShippingsettingsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}