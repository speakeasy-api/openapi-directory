package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsUpdateRequest {
    public DcimPlatformsUpdatePathParams pathParams;
    public DcimPlatformsUpdateRequest withPathParams(DcimPlatformsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePlatformInput request;
    public DcimPlatformsUpdateRequest withRequest(openapisdk.models.shared.WritablePlatformInput request) {
        this.request = request;
        return this;
    }
}