package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesStopWatchingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsCreativesStopWatchingPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeId")
    public String creativeId;
    public Adexchangebuyer2AccountsCreativesStopWatchingPathParams withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
}