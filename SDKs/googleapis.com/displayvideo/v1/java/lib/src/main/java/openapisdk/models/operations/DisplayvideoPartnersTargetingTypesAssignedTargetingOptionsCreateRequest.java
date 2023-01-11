package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest {
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest withPathParams(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest withQueryParams(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedTargetingOptionInput request;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest withRequest(openapisdk.models.shared.AssignedTargetingOptionInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity security;
    public DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest withSecurity(DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}