package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksWebhookIdLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookId")
    public String webhookId;
    public GetWebhooksWebhookIdLogsPathParams withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
}