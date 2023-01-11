package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsTracksPatchRequest {
    public AndroidpublisherEditsTracksPatchPathParams pathParams;
    public AndroidpublisherEditsTracksPatchRequest withPathParams(AndroidpublisherEditsTracksPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsTracksPatchQueryParams queryParams;
    public AndroidpublisherEditsTracksPatchRequest withQueryParams(AndroidpublisherEditsTracksPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Track request;
    public AndroidpublisherEditsTracksPatchRequest withRequest(openapisdk.models.shared.Track request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsTracksPatchSecurity security;
    public AndroidpublisherEditsTracksPatchRequest withSecurity(AndroidpublisherEditsTracksPatchSecurity security) {
        this.security = security;
        return this;
    }
}