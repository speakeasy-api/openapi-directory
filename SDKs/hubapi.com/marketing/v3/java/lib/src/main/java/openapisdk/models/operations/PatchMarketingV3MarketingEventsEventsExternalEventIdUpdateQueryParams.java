package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=externalAccountId")
    public String externalAccountId;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
}