package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesPartialUpdateRequest {
    public IpamPrefixesPartialUpdatePathParams pathParams;
    public IpamPrefixesPartialUpdateRequest withPathParams(IpamPrefixesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePrefixInput request;
    public IpamPrefixesPartialUpdateRequest withRequest(openapisdk.models.shared.WritablePrefixInput request) {
        this.request = request;
        return this;
    }
}