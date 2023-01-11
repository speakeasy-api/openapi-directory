package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}