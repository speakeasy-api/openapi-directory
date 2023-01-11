package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PingWebhookV1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public PingWebhookV1PathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}