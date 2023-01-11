package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsPatchRequest {
    public DisplayvideoAdvertisersCampaignsPatchPathParams pathParams;
    public DisplayvideoAdvertisersCampaignsPatchRequest withPathParams(DisplayvideoAdvertisersCampaignsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersCampaignsPatchQueryParams queryParams;
    public DisplayvideoAdvertisersCampaignsPatchRequest withQueryParams(DisplayvideoAdvertisersCampaignsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CampaignInput request;
    public DisplayvideoAdvertisersCampaignsPatchRequest withRequest(openapisdk.models.shared.CampaignInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersCampaignsPatchSecurity security;
    public DisplayvideoAdvertisersCampaignsPatchRequest withSecurity(DisplayvideoAdvertisersCampaignsPatchSecurity security) {
        this.security = security;
        return this;
    }
}