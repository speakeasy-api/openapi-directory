package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdclientsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdsensehostAccountsAdclientsListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}