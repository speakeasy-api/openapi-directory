package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamPrefixesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritablePrefixInput request;
    public IpamPrefixesCreateRequest withRequest(openapisdk.models.shared.WritablePrefixInput request) {
        this.request = request;
        return this;
    }
}