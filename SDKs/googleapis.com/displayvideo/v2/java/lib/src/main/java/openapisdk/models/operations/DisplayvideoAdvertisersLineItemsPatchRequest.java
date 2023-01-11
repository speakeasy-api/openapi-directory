package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsPatchRequest {
    public DisplayvideoAdvertisersLineItemsPatchPathParams pathParams;
    public DisplayvideoAdvertisersLineItemsPatchRequest withPathParams(DisplayvideoAdvertisersLineItemsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsPatchQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsPatchRequest withQueryParams(DisplayvideoAdvertisersLineItemsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LineItemInput request;
    public DisplayvideoAdvertisersLineItemsPatchRequest withRequest(openapisdk.models.shared.LineItemInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsPatchSecurity security;
    public DisplayvideoAdvertisersLineItemsPatchRequest withSecurity(DisplayvideoAdvertisersLineItemsPatchSecurity security) {
        this.security = security;
        return this;
    }
}