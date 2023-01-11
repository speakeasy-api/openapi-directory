package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountsAccountOrdersCustomerOrderIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CustomerOrderId")
    public String customerOrderId;
    public DeleteAccountsAccountOrdersCustomerOrderIdPathParams withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public DeleteAccountsAccountOrdersCustomerOrderIdPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}