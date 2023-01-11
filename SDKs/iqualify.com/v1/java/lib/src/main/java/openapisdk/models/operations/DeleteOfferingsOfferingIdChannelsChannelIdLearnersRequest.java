package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest {
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams pathParams;
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest withPathParams(DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody request;
    public DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest withRequest(DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody request) {
        this.request = request;
        return this;
    }
}