package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsListTransferableOffersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsListTransferableOffersPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}