package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsGetAdCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdsensehostAccountsAdunitsGetAdCodePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostAccountsAdunitsGetAdCodePathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adUnitId")
    public String adUnitId;
    public AdsensehostAccountsAdunitsGetAdCodePathParams withAdUnitId(String adUnitId) {
        this.adUnitId = adUnitId;
        return this;
    }
}