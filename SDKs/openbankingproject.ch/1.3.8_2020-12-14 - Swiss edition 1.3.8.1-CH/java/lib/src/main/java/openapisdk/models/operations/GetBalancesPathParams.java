package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-id")
    public String accountId;
    public GetBalancesPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}