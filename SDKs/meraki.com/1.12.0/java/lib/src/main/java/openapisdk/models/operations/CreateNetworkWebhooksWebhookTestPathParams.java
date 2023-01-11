package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWebhooksWebhookTestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkWebhooksWebhookTestPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}