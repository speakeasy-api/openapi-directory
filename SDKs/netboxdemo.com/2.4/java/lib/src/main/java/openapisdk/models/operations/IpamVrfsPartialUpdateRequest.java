package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsPartialUpdateRequest {
    public IpamVrfsPartialUpdatePathParams pathParams;
    public IpamVrfsPartialUpdateRequest withPathParams(IpamVrfsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVrfInput request;
    public IpamVrfsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVrfInput request) {
        this.request = request;
        return this;
    }
}