package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IpInfoRequestBody request;
    public IpInfoRequest withRequest(IpInfoRequestBody request) {
        this.request = request;
        return this;
    }
}