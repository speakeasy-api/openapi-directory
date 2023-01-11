package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpBlocklistDownloadRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public IpBlocklistDownloadRequestBody request;
    public IpBlocklistDownloadRequest withRequest(IpBlocklistDownloadRequestBody request) {
        this.request = request;
        return this;
    }
}