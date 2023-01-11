package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersProvisionCloudIdentityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public CloudchannelAccountsCustomersProvisionCloudIdentityPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}