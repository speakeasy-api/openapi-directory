package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsDuplicateRequest {
    public DisplayvideoAdvertisersLineItemsDuplicatePathParams pathParams;
    public DisplayvideoAdvertisersLineItemsDuplicateRequest withPathParams(DisplayvideoAdvertisersLineItemsDuplicatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsDuplicateQueryParams queryParams;
    public DisplayvideoAdvertisersLineItemsDuplicateRequest withQueryParams(DisplayvideoAdvertisersLineItemsDuplicateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DuplicateLineItemRequest request;
    public DisplayvideoAdvertisersLineItemsDuplicateRequest withRequest(openapisdk.models.shared.DuplicateLineItemRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersLineItemsDuplicateSecurity security;
    public DisplayvideoAdvertisersLineItemsDuplicateRequest withSecurity(DisplayvideoAdvertisersLineItemsDuplicateSecurity security) {
        this.security = security;
        return this;
    }
}