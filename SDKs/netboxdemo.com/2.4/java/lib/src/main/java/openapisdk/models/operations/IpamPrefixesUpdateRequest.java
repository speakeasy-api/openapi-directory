package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesUpdateRequest {
    public IpamPrefixesUpdatePathParams pathParams;
    public IpamPrefixesUpdateRequest withPathParams(IpamPrefixesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePrefixInput request;
    public IpamPrefixesUpdateRequest withRequest(openapisdk.models.shared.WritablePrefixInput request) {
        this.request = request;
        return this;
    }
}