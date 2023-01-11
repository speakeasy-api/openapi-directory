package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionLegacyRequest {
    public ReactionsCreateForTeamDiscussionLegacyPathParams pathParams;
    public ReactionsCreateForTeamDiscussionLegacyRequest withPathParams(ReactionsCreateForTeamDiscussionLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionLegacyRequestBody request;
    public ReactionsCreateForTeamDiscussionLegacyRequest withRequest(ReactionsCreateForTeamDiscussionLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}