package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesAvailableIpsCreateRequest {
    public IpamPrefixesAvailableIpsCreatePathParams pathParams;
    public IpamPrefixesAvailableIpsCreateRequest withPathParams(IpamPrefixesAvailableIpsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePrefixInput request;
    public IpamPrefixesAvailableIpsCreateRequest withRequest(openapisdk.models.shared.WritablePrefixInput request) {
        this.request = request;
        return this;
    }
}