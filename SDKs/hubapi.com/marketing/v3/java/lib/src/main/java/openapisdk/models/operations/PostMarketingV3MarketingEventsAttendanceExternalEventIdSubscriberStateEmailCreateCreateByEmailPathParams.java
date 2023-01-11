package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=externalEventId")
    public String externalEventId;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subscriberState")
    public String subscriberState;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams withSubscriberState(String subscriberState) {
        this.subscriberState = subscriberState;
        return this;
    }
}