package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpProbeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IpProbeRequestBody request;
    public IpProbeRequest withRequest(IpProbeRequestBody request) {
        this.request = request;
        return this;
    }
}