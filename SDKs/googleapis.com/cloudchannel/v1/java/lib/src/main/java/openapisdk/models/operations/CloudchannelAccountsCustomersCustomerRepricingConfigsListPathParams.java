package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}