package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsCreateRequest {
    public DisplayvideoAdvertisersLineItemsCreatePathParams pathParams;
    public DisplayvideoAdvertisersLineItemsCreateRequest withPathParams(DisplayvideoAdvertisersLineItemsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsCreateRequest withQueryParams(DisplayvideoAdvertisersLineItemsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LineItemInput request;
    public DisplayvideoAdvertisersLineItemsCreateRequest withRequest(openapisdk.models.shared.LineItemInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsCreateSecurity security;
    public DisplayvideoAdvertisersLineItemsCreateRequest withSecurity(DisplayvideoAdvertisersLineItemsCreateSecurity security) {
        this.security = security;
        return this;
    }
}