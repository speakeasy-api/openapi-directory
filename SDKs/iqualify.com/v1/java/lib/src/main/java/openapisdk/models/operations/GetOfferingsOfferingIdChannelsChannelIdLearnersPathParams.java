package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=offeringId")
    public String offeringId;
    public GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
}