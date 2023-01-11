package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest {
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest withPathParams(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest withQueryParams(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedTargetingOptionInput request;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest withRequest(openapisdk.models.shared.AssignedTargetingOptionInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity security;
    public DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest withSecurity(DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}