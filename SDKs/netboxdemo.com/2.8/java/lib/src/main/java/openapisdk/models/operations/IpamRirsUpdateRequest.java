package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsUpdateRequest {
    public IpamRirsUpdatePathParams pathParams;
    public IpamRirsUpdateRequest withPathParams(IpamRirsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RirInput request;
    public IpamRirsUpdateRequest withRequest(openapisdk.models.shared.RirInput request) {
        this.request = request;
        return this;
    }
}