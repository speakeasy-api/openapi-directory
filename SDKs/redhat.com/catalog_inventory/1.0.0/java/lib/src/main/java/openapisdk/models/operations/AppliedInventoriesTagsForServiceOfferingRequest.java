package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppliedInventoriesTagsForServiceOfferingRequest {
    public AppliedInventoriesTagsForServiceOfferingPathParams pathParams;
    public AppliedInventoriesTagsForServiceOfferingRequest withPathParams(AppliedInventoriesTagsForServiceOfferingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppliedInventoriesParametersServicePlan request;
    public AppliedInventoriesTagsForServiceOfferingRequest withRequest(openapisdk.models.shared.AppliedInventoriesParametersServicePlan request) {
        this.request = request;
        return this;
    }
}