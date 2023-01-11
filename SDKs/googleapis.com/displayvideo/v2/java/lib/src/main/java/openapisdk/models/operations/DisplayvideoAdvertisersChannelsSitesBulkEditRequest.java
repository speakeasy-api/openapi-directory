package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersChannelsSitesBulkEditRequest {
    public DisplayvideoAdvertisersChannelsSitesBulkEditPathParams pathParams;
    public DisplayvideoAdvertisersChannelsSitesBulkEditRequest withPathParams(DisplayvideoAdvertisersChannelsSitesBulkEditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams queryParams;
    public DisplayvideoAdvertisersChannelsSitesBulkEditRequest withQueryParams(DisplayvideoAdvertisersChannelsSitesBulkEditQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditSitesRequestInput request;
    public DisplayvideoAdvertisersChannelsSitesBulkEditRequest withRequest(openapisdk.models.shared.BulkEditSitesRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersChannelsSitesBulkEditSecurity security;
    public DisplayvideoAdvertisersChannelsSitesBulkEditRequest withSecurity(DisplayvideoAdvertisersChannelsSitesBulkEditSecurity security) {
        this.security = security;
        return this;
    }
}