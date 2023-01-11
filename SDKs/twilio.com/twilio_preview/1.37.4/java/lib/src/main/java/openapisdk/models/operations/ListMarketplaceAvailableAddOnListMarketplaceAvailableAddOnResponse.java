package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_add_ons")
    public openapisdk.models.shared.PreviewMarketplaceAvailableAddOn[] availableAddOns;
    public ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse withAvailableAddOns(openapisdk.models.shared.PreviewMarketplaceAvailableAddOn[] availableAddOns) {
        this.availableAddOns = availableAddOns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta meta;
    public ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse withMeta(ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}