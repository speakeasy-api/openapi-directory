package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RirInput request;
    public IpamRirsCreateRequest withRequest(openapisdk.models.shared.RirInput request) {
        this.request = request;
        return this;
    }
}