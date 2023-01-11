package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClientAuthRequest {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.auth+json")
    public ClientAuthRequestBody request;
    public ClientAuthRequest withRequest(ClientAuthRequestBody request) {
        this.request = request;
        return this;
    }
}