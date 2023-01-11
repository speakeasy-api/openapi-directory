package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectWebhookRequest {
    public UpdateProjectWebhookPathParams pathParams;
    public UpdateProjectWebhookRequest withPathParams(UpdateProjectWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateProjectWebhookRequestBody request;
    public UpdateProjectWebhookRequest withRequest(UpdateProjectWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}