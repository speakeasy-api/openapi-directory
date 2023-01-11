package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersCreateRequest {
    public DisplayvideoAdvertisersInsertionOrdersCreatePathParams pathParams;
    public DisplayvideoAdvertisersInsertionOrdersCreateRequest withPathParams(DisplayvideoAdvertisersInsertionOrdersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersCreateQueryParams queryParams;
    public DisplayvideoAdvertisersInsertionOrdersCreateRequest withQueryParams(DisplayvideoAdvertisersInsertionOrdersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InsertionOrderInput request;
    public DisplayvideoAdvertisersInsertionOrdersCreateRequest withRequest(openapisdk.models.shared.InsertionOrderInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersCreateSecurity security;
    public DisplayvideoAdvertisersInsertionOrdersCreateRequest withSecurity(DisplayvideoAdvertisersInsertionOrdersCreateSecurity security) {
        this.security = security;
        return this;
    }
}