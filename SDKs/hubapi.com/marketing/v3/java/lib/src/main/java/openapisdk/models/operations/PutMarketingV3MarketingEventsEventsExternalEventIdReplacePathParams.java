package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
}