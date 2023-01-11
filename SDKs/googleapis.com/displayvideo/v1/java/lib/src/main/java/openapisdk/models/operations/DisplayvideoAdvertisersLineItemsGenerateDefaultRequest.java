package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsGenerateDefaultRequest {
    public DisplayvideoAdvertisersLineItemsGenerateDefaultPathParams pathParams;
    public DisplayvideoAdvertisersLineItemsGenerateDefaultRequest withPathParams(DisplayvideoAdvertisersLineItemsGenerateDefaultPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsGenerateDefaultQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsGenerateDefaultRequest withQueryParams(DisplayvideoAdvertisersLineItemsGenerateDefaultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GenerateDefaultLineItemRequestInput request;
    public DisplayvideoAdvertisersLineItemsGenerateDefaultRequest withRequest(openapisdk.models.shared.GenerateDefaultLineItemRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity security;
    public DisplayvideoAdvertisersLineItemsGenerateDefaultRequest withSecurity(DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity security) {
        this.security = security;
        return this;
    }
}