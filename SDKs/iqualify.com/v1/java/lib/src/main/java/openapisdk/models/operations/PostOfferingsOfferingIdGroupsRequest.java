package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOfferingsOfferingIdGroupsRequest {
    public PostOfferingsOfferingIdGroupsPathParams pathParams;
    public PostOfferingsOfferingIdGroupsRequest withPathParams(PostOfferingsOfferingIdGroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssessmentGroupRequired request;
    public PostOfferingsOfferingIdGroupsRequest withRequest(openapisdk.models.shared.AssessmentGroupRequired request) {
        this.request = request;
        return this;
    }
}