package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest {
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsPathParams pathParams;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest withPathParams(DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsQueryParams queryParams;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest withQueryParams(DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditInventorySourceReadWriteAccessorsRequest request;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest withRequest(openapisdk.models.shared.EditInventorySourceReadWriteAccessorsRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity security;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest withSecurity(DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsSecurity security) {
        this.security = security;
        return this;
    }
}