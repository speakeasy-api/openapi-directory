package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}