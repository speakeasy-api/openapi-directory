package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookRequest {
    public UpdateWebhookPathParams pathParams;
    public UpdateWebhookRequest withPathParams(UpdateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWebhookRequestBody request;
    public UpdateWebhookRequest withRequest(openapisdk.models.shared.UpdateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}