package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest {
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsPathParams pathParams;
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest withPathParams(DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest withQueryParams(DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAssignedTargetingOptionsRequestInput request;
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest withRequest(openapisdk.models.shared.BulkEditAssignedTargetingOptionsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity security;
    public DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest withSecurity(DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity security) {
        this.security = security;
        return this;
    }
}