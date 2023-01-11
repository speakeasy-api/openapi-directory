package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdGroupsGroupIdLearnersRequest {
    public PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams pathParams;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersRequest withPathParams(PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody request;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersRequest withRequest(PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody request) {
        this.request = request;
        return this;
    }
}