package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRegionsUpdateRequest {
    public DcimRegionsUpdatePathParams pathParams;
    public DcimRegionsUpdateRequest withPathParams(DcimRegionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRegionInput request;
    public DcimRegionsUpdateRequest withRequest(openapisdk.models.shared.WritableRegionInput request) {
        this.request = request;
        return this;
    }
}