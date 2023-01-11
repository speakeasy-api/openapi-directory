package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsReportsGeneratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdsensehostAccountsReportsGeneratePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}