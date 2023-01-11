package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsSuspendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsCustomersEntitlementsSuspendPathParams withName(String name) {
        this.name = name;
        return this;
    }
}