package openapisdk.models.operations;



public class CreateMarketplaceInstalledAddOnResponse {
    public String contentType;
    public CreateMarketplaceInstalledAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMarketplaceInstalledAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn;
    public CreateMarketplaceInstalledAddOnResponse withPreviewMarketplaceInstalledAddOn(openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn) {
        this.previewMarketplaceInstalledAddOn = previewMarketplaceInstalledAddOn;
        return this;
    }
}