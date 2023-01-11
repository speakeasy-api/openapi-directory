package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsBulkUpdateRequest {
    public DisplayvideoAdvertisersLineItemsBulkUpdatePathParams pathParams;
    public DisplayvideoAdvertisersLineItemsBulkUpdateRequest withPathParams(DisplayvideoAdvertisersLineItemsBulkUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkUpdateQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsBulkUpdateRequest withQueryParams(DisplayvideoAdvertisersLineItemsBulkUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkUpdateLineItemsRequestInput request;
    public DisplayvideoAdvertisersLineItemsBulkUpdateRequest withRequest(openapisdk.models.shared.BulkUpdateLineItemsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsBulkUpdateSecurity security;
    public DisplayvideoAdvertisersLineItemsBulkUpdateRequest withSecurity(DisplayvideoAdvertisersLineItemsBulkUpdateSecurity security) {
        this.security = security;
        return this;
    }
}