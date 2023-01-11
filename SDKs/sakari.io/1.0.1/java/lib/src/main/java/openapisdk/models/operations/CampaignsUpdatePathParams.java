package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public CampaignsUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public CampaignsUpdatePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}