package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}