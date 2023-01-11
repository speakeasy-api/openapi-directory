package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}