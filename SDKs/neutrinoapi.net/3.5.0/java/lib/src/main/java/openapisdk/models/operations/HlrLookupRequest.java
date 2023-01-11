package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HlrLookupRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public HlrLookupRequestBody request;
    public HlrLookupRequest withRequest(HlrLookupRequestBody request) {
        this.request = request;
        return this;
    }
}