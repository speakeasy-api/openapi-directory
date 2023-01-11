package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsPartialUpdateRequest {
    public DcimPlatformsPartialUpdatePathParams pathParams;
    public DcimPlatformsPartialUpdateRequest withPathParams(DcimPlatformsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePlatformInput request;
    public DcimPlatformsPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePlatformInput request) {
        this.request = request;
        return this;
    }
}