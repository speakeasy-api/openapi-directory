package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWebhooksHttpServersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWebhooksHttpServersPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}