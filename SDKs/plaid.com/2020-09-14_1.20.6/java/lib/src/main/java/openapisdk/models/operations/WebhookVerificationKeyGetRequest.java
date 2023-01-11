package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhookVerificationKeyGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookVerificationKeyGetRequest request;
    public WebhookVerificationKeyGetRequest withRequest(openapisdk.models.shared.WebhookVerificationKeyGetRequest request) {
        this.request = request;
        return this;
    }
}