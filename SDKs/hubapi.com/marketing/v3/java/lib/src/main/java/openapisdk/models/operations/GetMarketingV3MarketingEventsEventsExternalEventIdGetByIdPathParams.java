package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}