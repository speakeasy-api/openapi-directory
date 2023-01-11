package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionCommentLegacyRequest {
    public TeamsCreateDiscussionCommentLegacyPathParams pathParams;
    public TeamsCreateDiscussionCommentLegacyRequest withPathParams(TeamsCreateDiscussionCommentLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionCommentLegacyRequestBody request;
    public TeamsCreateDiscussionCommentLegacyRequest withRequest(TeamsCreateDiscussionCommentLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}