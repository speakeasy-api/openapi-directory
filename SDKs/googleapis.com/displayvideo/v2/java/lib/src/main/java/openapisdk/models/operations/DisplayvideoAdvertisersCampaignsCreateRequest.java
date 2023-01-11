package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsCreateRequest {
    public DisplayvideoAdvertisersCampaignsCreatePathParams pathParams;
    public DisplayvideoAdvertisersCampaignsCreateRequest withPathParams(DisplayvideoAdvertisersCampaignsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersCampaignsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersCampaignsCreateRequest withQueryParams(DisplayvideoAdvertisersCampaignsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CampaignInput request;
    public DisplayvideoAdvertisersCampaignsCreateRequest withRequest(openapisdk.models.shared.CampaignInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersCampaignsCreateSecurity security;
    public DisplayvideoAdvertisersCampaignsCreateRequest withSecurity(DisplayvideoAdvertisersCampaignsCreateSecurity security) {
        this.security = security;
        return this;
    }
}