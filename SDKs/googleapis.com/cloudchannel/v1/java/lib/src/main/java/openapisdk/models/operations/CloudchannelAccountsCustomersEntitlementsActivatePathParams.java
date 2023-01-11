package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsActivatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsCustomersEntitlementsActivatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}