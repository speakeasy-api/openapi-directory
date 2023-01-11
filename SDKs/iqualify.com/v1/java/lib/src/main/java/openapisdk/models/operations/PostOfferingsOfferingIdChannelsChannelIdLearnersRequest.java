package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdChannelsChannelIdLearnersRequest {
    public PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams pathParams;
    public PostOfferingsOfferingIdChannelsChannelIdLearnersRequest withPathParams(PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody request;
    public PostOfferingsOfferingIdChannelsChannelIdLearnersRequest withRequest(PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody request) {
        this.request = request;
        return this;
    }
}