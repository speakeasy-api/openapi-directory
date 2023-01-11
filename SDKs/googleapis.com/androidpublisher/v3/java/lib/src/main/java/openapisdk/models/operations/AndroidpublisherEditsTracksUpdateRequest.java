package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsTracksUpdateRequest {
    public AndroidpublisherEditsTracksUpdatePathParams pathParams;
    public AndroidpublisherEditsTracksUpdateRequest withPathParams(AndroidpublisherEditsTracksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherEditsTracksUpdateQueryParams queryParams;
    public AndroidpublisherEditsTracksUpdateRequest withQueryParams(AndroidpublisherEditsTracksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Track request;
    public AndroidpublisherEditsTracksUpdateRequest withRequest(openapisdk.models.shared.Track request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherEditsTracksUpdateSecurity security;
    public AndroidpublisherEditsTracksUpdateRequest withSecurity(AndroidpublisherEditsTracksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}