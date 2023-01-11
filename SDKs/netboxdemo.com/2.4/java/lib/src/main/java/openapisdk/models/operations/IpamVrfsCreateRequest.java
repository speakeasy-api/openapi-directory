package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVrfInput request;
    public IpamVrfsCreateRequest withRequest(openapisdk.models.shared.WritableVrfInput request) {
        this.request = request;
        return this;
    }
}