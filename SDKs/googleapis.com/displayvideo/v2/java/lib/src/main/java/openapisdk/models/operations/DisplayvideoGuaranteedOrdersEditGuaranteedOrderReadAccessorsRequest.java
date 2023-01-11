package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest {
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams pathParams;
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest withPathParams(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams queryParams;
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest withQueryParams(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditGuaranteedOrderReadAccessorsRequest request;
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest withRequest(openapisdk.models.shared.EditGuaranteedOrderReadAccessorsRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity security;
    public DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest withSecurity(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity security) {
        this.security = security;
        return this;
    }
}