package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdsensehostAccountsAdunitsPatchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostAccountsAdunitsPatchPathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
}