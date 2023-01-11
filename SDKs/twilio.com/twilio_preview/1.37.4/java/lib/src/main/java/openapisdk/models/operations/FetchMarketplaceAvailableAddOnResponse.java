package openapisdk.models.operations;



public class FetchMarketplaceAvailableAddOnResponse {
    public String contentType;
    public FetchMarketplaceAvailableAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMarketplaceAvailableAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewMarketplaceAvailableAddOn previewMarketplaceAvailableAddOn;
    public FetchMarketplaceAvailableAddOnResponse withPreviewMarketplaceAvailableAddOn(openapisdk.models.shared.PreviewMarketplaceAvailableAddOn previewMarketplaceAvailableAddOn) {
        this.previewMarketplaceAvailableAddOn = previewMarketplaceAvailableAddOn;
        return this;
    }
}