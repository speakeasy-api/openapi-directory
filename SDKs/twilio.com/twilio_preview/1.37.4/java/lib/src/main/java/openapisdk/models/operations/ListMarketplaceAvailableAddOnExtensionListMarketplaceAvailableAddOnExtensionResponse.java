package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[] extensions;
    public ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse withExtensions(openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta meta;
    public ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse withMeta(ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}