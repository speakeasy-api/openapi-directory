package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}