package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdBeneficiariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountsAccountIdBeneficiariesPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}