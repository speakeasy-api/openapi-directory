package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchOfferingsOfferingIdChannelsChannelIdRequest {
    public PatchOfferingsOfferingIdChannelsChannelIdPathParams pathParams;
    public PatchOfferingsOfferingIdChannelsChannelIdRequest withPathParams(PatchOfferingsOfferingIdChannelsChannelIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public PatchOfferingsOfferingIdChannelsChannelIdRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
}