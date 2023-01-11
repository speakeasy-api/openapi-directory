package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGuaranteedOrdersCreateRequest {
    public DisplayvideoGuaranteedOrdersCreateQueryParams queryParams;
    public DisplayvideoGuaranteedOrdersCreateRequest withQueryParams(DisplayvideoGuaranteedOrdersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GuaranteedOrderInput request;
    public DisplayvideoGuaranteedOrdersCreateRequest withRequest(openapisdk.models.shared.GuaranteedOrderInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoGuaranteedOrdersCreateSecurity security;
    public DisplayvideoGuaranteedOrdersCreateRequest withSecurity(DisplayvideoGuaranteedOrdersCreateSecurity security) {
        this.security = security;
        return this;
    }
}