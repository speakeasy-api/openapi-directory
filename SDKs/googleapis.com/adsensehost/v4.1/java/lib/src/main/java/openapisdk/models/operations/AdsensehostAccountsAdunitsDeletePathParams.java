package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsensehostAccountsAdunitsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AdsensehostAccountsAdunitsDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adClientId")
    public String adClientId;
    public AdsensehostAccountsAdunitsDeletePathParams withAdClientId(String adClientId) {
        this.adClientId = adClientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=adUnitId")
    public String adUnitId;
    public AdsensehostAccountsAdunitsDeletePathParams withAdUnitId(String adUnitId) {
        this.adUnitId = adUnitId;
        return this;
    }
}