package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookV1Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebhookRequest request;
    public CreateWebhookV1Request withRequest(openapisdk.models.shared.CreateWebhookRequest request) {
        this.request = request;
        return this;
    }
}