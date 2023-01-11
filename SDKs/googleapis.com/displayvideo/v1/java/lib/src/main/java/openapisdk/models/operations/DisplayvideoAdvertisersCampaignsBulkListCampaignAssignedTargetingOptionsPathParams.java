package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaignId")
    public String campaignId;
    public DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}