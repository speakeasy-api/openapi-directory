package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePlatformInput request;
    public DcimPlatformsCreateRequest withRequest(openapisdk.models.shared.WritablePlatformInput request) {
        this.request = request;
        return this;
    }
}