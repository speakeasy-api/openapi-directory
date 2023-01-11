package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountsAccountOrdersCustomerOrderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerOrderId")
    public String customerOrderId;
    public PutAccountsAccountOrdersCustomerOrderIdPathParams withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public PutAccountsAccountOrdersCustomerOrderIdPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}