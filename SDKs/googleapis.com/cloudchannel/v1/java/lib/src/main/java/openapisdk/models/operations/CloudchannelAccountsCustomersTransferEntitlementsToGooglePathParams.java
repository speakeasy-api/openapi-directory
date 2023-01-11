package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersTransferEntitlementsToGooglePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}