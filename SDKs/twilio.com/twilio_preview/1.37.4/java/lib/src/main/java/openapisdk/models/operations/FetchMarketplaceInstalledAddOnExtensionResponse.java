package openapisdk.models.operations;



public class FetchMarketplaceInstalledAddOnExtensionResponse {
    public String contentType;
    public FetchMarketplaceInstalledAddOnExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMarketplaceInstalledAddOnExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension previewMarketplaceInstalledAddOnInstalledAddOnExtension;
    public FetchMarketplaceInstalledAddOnExtensionResponse withPreviewMarketplaceInstalledAddOnInstalledAddOnExtension(openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension previewMarketplaceInstalledAddOnInstalledAddOnExtension) {
        this.previewMarketplaceInstalledAddOnInstalledAddOnExtension = previewMarketplaceInstalledAddOnInstalledAddOnExtension;
        return this;
    }
}