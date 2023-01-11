package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoPartnersChannelsSitesBulkEditRequest {
    public DisplayvideoPartnersChannelsSitesBulkEditPathParams pathParams;
    public DisplayvideoPartnersChannelsSitesBulkEditRequest withPathParams(DisplayvideoPartnersChannelsSitesBulkEditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoPartnersChannelsSitesBulkEditQueryParams queryParams;
    public DisplayvideoPartnersChannelsSitesBulkEditRequest withQueryParams(DisplayvideoPartnersChannelsSitesBulkEditQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditSitesRequestInput request;
    public DisplayvideoPartnersChannelsSitesBulkEditRequest withRequest(openapisdk.models.shared.BulkEditSitesRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoPartnersChannelsSitesBulkEditSecurity security;
    public DisplayvideoPartnersChannelsSitesBulkEditRequest withSecurity(DisplayvideoPartnersChannelsSitesBulkEditSecurity security) {
        this.security = security;
        return this;
    }
}