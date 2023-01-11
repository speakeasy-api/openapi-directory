package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public Long account;
    public GetCustomerPathParams withAccount(Long account) {
        this.account = account;
        return this;
    }
}