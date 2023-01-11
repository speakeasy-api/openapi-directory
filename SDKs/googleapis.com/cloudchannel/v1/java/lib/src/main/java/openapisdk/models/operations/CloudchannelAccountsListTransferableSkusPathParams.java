package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsListTransferableSkusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsListTransferableSkusPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}