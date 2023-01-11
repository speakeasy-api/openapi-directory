package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertAccessTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.auth+json")
    public ConvertAccessTokenRequestBody request;
    public ConvertAccessTokenRequest withRequest(ConvertAccessTokenRequestBody request) {
        this.request = request;
        return this;
    }
}