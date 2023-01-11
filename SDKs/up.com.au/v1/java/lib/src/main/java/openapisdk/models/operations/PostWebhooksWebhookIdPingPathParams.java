package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksWebhookIdPingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public PostWebhooksWebhookIdPingPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}