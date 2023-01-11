package openapisdk.models.operations;



public class UpdateMarketplaceInstalledAddOnExtensionResponse {
    public String contentType;
    public UpdateMarketplaceInstalledAddOnExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMarketplaceInstalledAddOnExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension previewMarketplaceInstalledAddOnInstalledAddOnExtension;
    public UpdateMarketplaceInstalledAddOnExtensionResponse withPreviewMarketplaceInstalledAddOnInstalledAddOnExtension(openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension previewMarketplaceInstalledAddOnInstalledAddOnExtension) {
        this.previewMarketplaceInstalledAddOnInstalledAddOnExtension = previewMarketplaceInstalledAddOnInstalledAddOnExtension;
        return this;
    }
}