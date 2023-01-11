package openapisdk.models.operations;



public class UpdateMarketplaceInstalledAddOnResponse {
    public String contentType;
    public UpdateMarketplaceInstalledAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMarketplaceInstalledAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn;
    public UpdateMarketplaceInstalledAddOnResponse withPreviewMarketplaceInstalledAddOn(openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn) {
        this.previewMarketplaceInstalledAddOn = previewMarketplaceInstalledAddOn;
        return this;
    }
}