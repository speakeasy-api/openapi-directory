package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpBlocklistRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IpBlocklistRequestBody request;
    public IpBlocklistRequest withRequest(IpBlocklistRequestBody request) {
        this.request = request;
        return this;
    }
}