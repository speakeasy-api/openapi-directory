package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRegionsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRegionInput request;
    public DcimRegionsCreateRequest withRequest(openapisdk.models.shared.WritableRegionInput request) {
        this.request = request;
        return this;
    }
}