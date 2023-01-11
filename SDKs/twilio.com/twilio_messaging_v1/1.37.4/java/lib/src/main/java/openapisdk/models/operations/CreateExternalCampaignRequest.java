package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExternalCampaignRequest {
    public String serverURL;
    public CreateExternalCampaignRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateExternalCampaignCreateExternalCampaignRequest request;
    public CreateExternalCampaignRequest withRequest(CreateExternalCampaignCreateExternalCampaignRequest request) {
        this.request = request;
        return this;
    }
    public CreateExternalCampaignSecurity security;
    public CreateExternalCampaignRequest withSecurity(CreateExternalCampaignSecurity security) {
        this.security = security;
        return this;
    }
}