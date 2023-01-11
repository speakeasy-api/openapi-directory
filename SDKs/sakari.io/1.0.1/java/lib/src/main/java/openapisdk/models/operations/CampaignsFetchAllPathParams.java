package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsFetchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public CampaignsFetchAllPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}