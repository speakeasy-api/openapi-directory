package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableVendorsRequest {
    public GetAvailableVendorsQueryParams queryParams;
    public GetAvailableVendorsRequest withQueryParams(GetAvailableVendorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AvailableVendorsFilter request;
    public GetAvailableVendorsRequest withRequest(openapisdk.models.shared.AvailableVendorsFilter request) {
        this.request = request;
        return this;
    }
}