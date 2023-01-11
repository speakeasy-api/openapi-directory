package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}