package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdChannelsRequest {
    public PostOfferingsOfferingIdChannelsPathParams pathParams;
    public PostOfferingsOfferingIdChannelsRequest withPathParams(PostOfferingsOfferingIdChannelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChannelRequired request;
    public PostOfferingsOfferingIdChannelsRequest withRequest(openapisdk.models.shared.ChannelRequired request) {
        this.request = request;
        return this;
    }
}