package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest {
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest withPathParams(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest withQueryParams(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedTargetingOptionInput request;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest withRequest(openapisdk.models.shared.AssignedTargetingOptionInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity security;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest withSecurity(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}