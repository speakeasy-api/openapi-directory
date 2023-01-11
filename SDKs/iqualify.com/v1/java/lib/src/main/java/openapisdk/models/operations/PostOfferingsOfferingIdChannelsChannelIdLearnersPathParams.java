package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}