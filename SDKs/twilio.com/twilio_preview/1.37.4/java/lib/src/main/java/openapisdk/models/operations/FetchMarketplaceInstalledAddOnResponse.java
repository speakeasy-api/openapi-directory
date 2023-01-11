package openapisdk.models.operations;



public class FetchMarketplaceInstalledAddOnResponse {
    public String contentType;
    public FetchMarketplaceInstalledAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMarketplaceInstalledAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn;
    public FetchMarketplaceInstalledAddOnResponse withPreviewMarketplaceInstalledAddOn(openapisdk.models.shared.PreviewMarketplaceInstalledAddOn previewMarketplaceInstalledAddOn) {
        this.previewMarketplaceInstalledAddOn = previewMarketplaceInstalledAddOn;
        return this;
    }
}