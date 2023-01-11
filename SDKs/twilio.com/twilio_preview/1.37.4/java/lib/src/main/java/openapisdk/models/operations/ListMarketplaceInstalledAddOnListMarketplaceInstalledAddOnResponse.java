package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed_add_ons")
    public openapisdk.models.shared.PreviewMarketplaceInstalledAddOn[] installedAddOns;
    public ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse withInstalledAddOns(openapisdk.models.shared.PreviewMarketplaceInstalledAddOn[] installedAddOns) {
        this.installedAddOns = installedAddOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta meta;
    public ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse withMeta(ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}