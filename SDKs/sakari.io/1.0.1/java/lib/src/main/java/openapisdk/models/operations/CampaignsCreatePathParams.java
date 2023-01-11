package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public CampaignsCreatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}