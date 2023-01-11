package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest {
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams pathParams;
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest withPathParams(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest withQueryParams(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditLineItemAssignedTargetingOptionsRequestInput request;
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest withRequest(openapisdk.models.shared.BulkEditLineItemAssignedTargetingOptionsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity security;
    public DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest withSecurity(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity security) {
        this.security = security;
        return this;
    }
}