package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public CampaignsRemovePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public CampaignsRemovePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}