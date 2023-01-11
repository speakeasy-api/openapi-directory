package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookV1Request {
    public UpdateWebhookV1PathParams pathParams;
    public UpdateWebhookV1Request withPathParams(UpdateWebhookV1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWebhookRequest request;
    public UpdateWebhookV1Request withRequest(openapisdk.models.shared.UpdateWebhookRequest request) {
        this.request = request;
        return this;
    }
}