package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookV1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public UpdateWebhookV1PathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}