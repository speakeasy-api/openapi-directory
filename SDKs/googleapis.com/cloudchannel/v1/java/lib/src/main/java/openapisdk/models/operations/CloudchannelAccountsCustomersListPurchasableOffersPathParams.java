package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersListPurchasableOffersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customer")
    public String customer;
    public CloudchannelAccountsCustomersListPurchasableOffersPathParams withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}