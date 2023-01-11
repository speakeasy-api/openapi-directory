package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesAvailablePrefixesCreateRequest {
    public IpamPrefixesAvailablePrefixesCreatePathParams pathParams;
    public IpamPrefixesAvailablePrefixesCreateRequest withPathParams(IpamPrefixesAvailablePrefixesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePrefixInput request;
    public IpamPrefixesAvailablePrefixesCreateRequest withRequest(openapisdk.models.shared.WritablePrefixInput request) {
        this.request = request;
        return this;
    }
}