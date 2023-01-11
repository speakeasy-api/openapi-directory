package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkWebhooksHttpServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=httpServerId")
    public String httpServerId;
    public DeleteNetworkWebhooksHttpServerPathParams withHttpServerId(String httpServerId) {
        this.httpServerId = httpServerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkWebhooksHttpServerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}