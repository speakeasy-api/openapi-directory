package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignCreativeAssociationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public DfareportingCampaignCreativeAssociationsListPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCampaignCreativeAssociationsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}