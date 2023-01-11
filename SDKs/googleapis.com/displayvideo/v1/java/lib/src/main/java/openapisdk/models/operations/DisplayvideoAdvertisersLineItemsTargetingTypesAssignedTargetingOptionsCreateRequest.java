package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest {
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest withPathParams(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest withQueryParams(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedTargetingOptionInput request;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest withRequest(openapisdk.models.shared.AssignedTargetingOptionInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity security;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest withSecurity(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}