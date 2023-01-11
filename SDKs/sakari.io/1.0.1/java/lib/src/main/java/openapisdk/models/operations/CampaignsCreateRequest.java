package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignsCreateRequest {
    public CampaignsCreatePathParams pathParams;
    public CampaignsCreateRequest withPathParams(CampaignsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CampaignRequest request;
    public CampaignsCreateRequest withRequest(openapisdk.models.shared.CampaignRequest request) {
        this.request = request;
        return this;
    }
    public CampaignsCreateSecurity security;
    public CampaignsCreateRequest withSecurity(CampaignsCreateSecurity security) {
        this.security = security;
        return this;
    }
}