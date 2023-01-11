package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest {
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams pathParams;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest withPathParams(DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams queryParams;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest withQueryParams(DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput request;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest withRequest(openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity security;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest withSecurity(DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity security) {
        this.security = security;
        return this;
    }
}