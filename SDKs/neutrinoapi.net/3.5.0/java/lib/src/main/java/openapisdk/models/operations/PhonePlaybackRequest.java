package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhonePlaybackRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PhonePlaybackRequestBody request;
    public PhonePlaybackRequest withRequest(PhonePlaybackRequestBody request) {
        this.request = request;
        return this;
    }
}