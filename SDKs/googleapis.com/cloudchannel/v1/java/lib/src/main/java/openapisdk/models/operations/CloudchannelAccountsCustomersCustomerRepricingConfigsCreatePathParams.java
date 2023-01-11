package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}