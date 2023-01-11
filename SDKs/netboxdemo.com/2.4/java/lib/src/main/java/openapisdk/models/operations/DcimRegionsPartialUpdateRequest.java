package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRegionsPartialUpdateRequest {
    public DcimRegionsPartialUpdatePathParams pathParams;
    public DcimRegionsPartialUpdateRequest withPathParams(DcimRegionsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRegionInput request;
    public DcimRegionsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableRegionInput request) {
        this.request = request;
        return this;
    }
}