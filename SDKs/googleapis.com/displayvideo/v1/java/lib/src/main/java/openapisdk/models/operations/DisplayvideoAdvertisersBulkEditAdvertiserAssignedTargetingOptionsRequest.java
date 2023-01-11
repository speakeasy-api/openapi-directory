package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest {
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams pathParams;
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest withPathParams(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams queryParams;
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest withQueryParams(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput request;
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest withRequest(openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity security;
    public DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest withSecurity(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity security) {
        this.security = security;
        return this;
    }
}