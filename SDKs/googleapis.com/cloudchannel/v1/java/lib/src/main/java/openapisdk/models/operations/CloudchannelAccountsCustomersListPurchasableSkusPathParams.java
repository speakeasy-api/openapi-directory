package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersListPurchasableSkusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public CloudchannelAccountsCustomersListPurchasableSkusPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}