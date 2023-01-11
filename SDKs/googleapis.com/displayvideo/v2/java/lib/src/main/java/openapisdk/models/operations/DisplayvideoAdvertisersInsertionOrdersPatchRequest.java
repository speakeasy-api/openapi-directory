package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersPatchRequest {
    public DisplayvideoAdvertisersInsertionOrdersPatchPathParams pathParams;
    public DisplayvideoAdvertisersInsertionOrdersPatchRequest withPathParams(DisplayvideoAdvertisersInsertionOrdersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersPatchQueryParams queryParams;
    public DisplayvideoAdvertisersInsertionOrdersPatchRequest withQueryParams(DisplayvideoAdvertisersInsertionOrdersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InsertionOrderInput request;
    public DisplayvideoAdvertisersInsertionOrdersPatchRequest withRequest(openapisdk.models.shared.InsertionOrderInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersInsertionOrdersPatchSecurity security;
    public DisplayvideoAdvertisersInsertionOrdersPatchRequest withSecurity(DisplayvideoAdvertisersInsertionOrdersPatchSecurity security) {
        this.security = security;
        return this;
    }
}