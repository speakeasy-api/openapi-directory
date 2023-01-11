package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhook_id")
    public String webhookId;
    public GetWebhookByIdPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}