package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriberState")
    public String subscriberState;
    public PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams withSubscriberState(String subscriberState) {
        this.subscriberState = subscriberState;
        return this;
    }
}