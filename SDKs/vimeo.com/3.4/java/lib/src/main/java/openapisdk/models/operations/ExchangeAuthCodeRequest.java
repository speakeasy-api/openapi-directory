package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExchangeAuthCodeRequest {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.auth+json")
    public ExchangeAuthCodeRequestBody request;
    public ExchangeAuthCodeRequest withRequest(ExchangeAuthCodeRequestBody request) {
        this.request = request;
        return this;
    }
}