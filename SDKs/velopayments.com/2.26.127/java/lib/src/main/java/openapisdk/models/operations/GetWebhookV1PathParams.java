package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookV1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public GetWebhookV1PathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}