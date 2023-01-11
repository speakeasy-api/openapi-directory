package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersEntitlementsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}