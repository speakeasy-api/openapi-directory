package openapisdk.models.operations;



public class FetchMarketplaceAvailableAddOnExtensionResponse {
    public String contentType;
    public FetchMarketplaceAvailableAddOnExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMarketplaceAvailableAddOnExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension previewMarketplaceAvailableAddOnAvailableAddOnExtension;
    public FetchMarketplaceAvailableAddOnExtensionResponse withPreviewMarketplaceAvailableAddOnAvailableAddOnExtension(openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension previewMarketplaceAvailableAddOnAvailableAddOnExtension) {
        this.previewMarketplaceAvailableAddOnAvailableAddOnExtension = previewMarketplaceAvailableAddOnAvailableAddOnExtension;
        return this;
    }
}