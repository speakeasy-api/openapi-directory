package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTracksTrackIdCommentsRequest {
    public PostTracksTrackIdCommentsPathParams pathParams;
    public PostTracksTrackIdCommentsRequest withPathParams(PostTracksTrackIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTracksTrackIdCommentsRequestBody request;
    public PostTracksTrackIdCommentsRequest withRequest(PostTracksTrackIdCommentsRequestBody request) {
        this.request = request;
        return this;
    }
    public PostTracksTrackIdCommentsSecurity security;
    public PostTracksTrackIdCommentsRequest withSecurity(PostTracksTrackIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}