package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsUpdateRequest {
    public IpamVrfsUpdatePathParams pathParams;
    public IpamVrfsUpdateRequest withPathParams(IpamVrfsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVrfInput request;
    public IpamVrfsUpdateRequest withRequest(openapisdk.models.shared.WritableVrfInput request) {
        this.request = request;
        return this;
    }
}