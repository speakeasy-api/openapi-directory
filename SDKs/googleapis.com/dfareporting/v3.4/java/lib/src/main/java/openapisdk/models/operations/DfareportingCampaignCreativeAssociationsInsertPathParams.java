package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignCreativeAssociationsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public DfareportingCampaignCreativeAssociationsInsertPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCampaignCreativeAssociationsInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}