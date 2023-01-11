package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWebhooksWebhookTestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWebhooksWebhookTestPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webhookTestId")
    public String webhookTestId;
    public GetNetworkWebhooksWebhookTestPathParams withWebhookTestId(String webhookTestId) {
        this.webhookTestId = webhookTestId;
        return this;
    }
}