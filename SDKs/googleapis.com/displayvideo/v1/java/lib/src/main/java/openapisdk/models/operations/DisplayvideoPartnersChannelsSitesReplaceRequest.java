package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsSitesReplaceRequest {
    public DisplayvideoPartnersChannelsSitesReplacePathParams pathParams;
    public DisplayvideoPartnersChannelsSitesReplaceRequest withPathParams(DisplayvideoPartnersChannelsSitesReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersChannelsSitesReplaceQueryParams queryParams;
    public DisplayvideoPartnersChannelsSitesReplaceRequest withQueryParams(DisplayvideoPartnersChannelsSitesReplaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplaceSitesRequestInput request;
    public DisplayvideoPartnersChannelsSitesReplaceRequest withRequest(openapisdk.models.shared.ReplaceSitesRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersChannelsSitesReplaceSecurity security;
    public DisplayvideoPartnersChannelsSitesReplaceRequest withSecurity(DisplayvideoPartnersChannelsSitesReplaceSecurity security) {
        this.security = security;
        return this;
    }
}