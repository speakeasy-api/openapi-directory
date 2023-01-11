package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extensions")
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension[] extensions;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse withExtensions(openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension[] extensions) {
        this.extensions = extensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta meta;
    public ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse withMeta(ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}