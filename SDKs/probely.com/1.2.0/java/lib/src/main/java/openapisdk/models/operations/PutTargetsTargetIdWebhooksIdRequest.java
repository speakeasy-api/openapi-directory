package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdWebhooksIdRequest {
    public PutTargetsTargetIdWebhooksIdPathParams pathParams;
    public PutTargetsTargetIdWebhooksIdRequest withPathParams(PutTargetsTargetIdWebhooksIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookInput request;
    public PutTargetsTargetIdWebhooksIdRequest withRequest(openapisdk.models.shared.WebhookInput request) {
        this.request = request;
        return this;
    }
}