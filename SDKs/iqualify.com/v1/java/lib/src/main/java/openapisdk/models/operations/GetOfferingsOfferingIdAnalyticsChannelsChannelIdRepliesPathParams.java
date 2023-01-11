package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}