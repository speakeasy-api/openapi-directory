package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExternalCampaignCreateExternalCampaignRequest {
    @SpeakeasyMetadata("form:name=CampaignId")
    public String campaignId;
    public CreateExternalCampaignCreateExternalCampaignRequest withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateExternalCampaignCreateExternalCampaignRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}