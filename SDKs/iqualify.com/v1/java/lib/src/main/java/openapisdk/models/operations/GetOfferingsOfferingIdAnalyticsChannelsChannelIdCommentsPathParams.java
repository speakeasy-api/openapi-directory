package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}