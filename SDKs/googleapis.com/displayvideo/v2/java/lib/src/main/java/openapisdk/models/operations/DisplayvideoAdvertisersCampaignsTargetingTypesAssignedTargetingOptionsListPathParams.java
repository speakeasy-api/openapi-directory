package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListPathParams withTargetingType(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}