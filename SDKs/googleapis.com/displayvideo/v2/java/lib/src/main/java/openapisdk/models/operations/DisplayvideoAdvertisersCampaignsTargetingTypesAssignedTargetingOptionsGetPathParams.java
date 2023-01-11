package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetPathParams withTargetingType(DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}