package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountOrdersCustomerOrderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerOrderId")
    public String customerOrderId;
    public GetAccountsAccountOrdersCustomerOrderIdPathParams withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public GetAccountsAccountOrdersCustomerOrderIdPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}