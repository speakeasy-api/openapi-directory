package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualChassisInput request;
    public DcimVirtualChassisCreateRequest withRequest(openapisdk.models.shared.WritableVirtualChassisInput request) {
        this.request = request;
        return this;
    }
}