package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersTransferEntitlementsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersTransferEntitlementsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}