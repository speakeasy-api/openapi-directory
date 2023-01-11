package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWebhooksHttpServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=httpServerId")
    public String httpServerId;
    public UpdateNetworkWebhooksHttpServerPathParams withHttpServerId(String httpServerId) {
        this.httpServerId = httpServerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWebhooksHttpServerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}