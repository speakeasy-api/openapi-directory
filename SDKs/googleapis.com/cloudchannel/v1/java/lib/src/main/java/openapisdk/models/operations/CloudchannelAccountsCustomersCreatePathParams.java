package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}