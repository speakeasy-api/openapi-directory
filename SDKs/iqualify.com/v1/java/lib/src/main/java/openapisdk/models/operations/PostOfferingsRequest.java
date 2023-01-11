package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OfferingRequired request;
    public PostOfferingsRequest withRequest(openapisdk.models.shared.OfferingRequired request) {
        this.request = request;
        return this;
    }
}