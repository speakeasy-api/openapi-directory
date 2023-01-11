package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdUsersRequest {
    public PostOfferingsOfferingIdUsersPathParams pathParams;
    public PostOfferingsOfferingIdUsersRequest withPathParams(PostOfferingsOfferingIdUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OfferingUser[] request;
    public PostOfferingsOfferingIdUsersRequest withRequest(openapisdk.models.shared.OfferingUser[] request) {
        this.request = request;
        return this;
    }
}