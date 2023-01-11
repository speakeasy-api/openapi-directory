package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdChannelsChannelIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public PatchOfferingsOfferingIdChannelsChannelIdPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public PatchOfferingsOfferingIdChannelsChannelIdPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}