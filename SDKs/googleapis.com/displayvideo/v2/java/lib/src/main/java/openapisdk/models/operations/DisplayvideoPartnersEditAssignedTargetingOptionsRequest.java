package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersEditAssignedTargetingOptionsRequest {
    public DisplayvideoPartnersEditAssignedTargetingOptionsPathParams pathParams;
    public DisplayvideoPartnersEditAssignedTargetingOptionsRequest withPathParams(DisplayvideoPartnersEditAssignedTargetingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams queryParams;
    public DisplayvideoPartnersEditAssignedTargetingOptionsRequest withQueryParams(DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsRequestInput request;
    public DisplayvideoPartnersEditAssignedTargetingOptionsRequest withRequest(openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersEditAssignedTargetingOptionsSecurity security;
    public DisplayvideoPartnersEditAssignedTargetingOptionsRequest withSecurity(DisplayvideoPartnersEditAssignedTargetingOptionsSecurity security) {
        this.security = security;
        return this;
    }
}