package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsPartialUpdateRequest {
    public IpamRirsPartialUpdatePathParams pathParams;
    public IpamRirsPartialUpdateRequest withPathParams(IpamRirsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RirInput request;
    public IpamRirsPartialUpdateRequest withRequest(openapisdk.models.shared.RirInput request) {
        this.request = request;
        return this;
    }
}