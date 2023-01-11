package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionInOrgRequest {
    public ReactionsCreateForTeamDiscussionInOrgPathParams pathParams;
    public ReactionsCreateForTeamDiscussionInOrgRequest withPathParams(ReactionsCreateForTeamDiscussionInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionInOrgRequestBody request;
    public ReactionsCreateForTeamDiscussionInOrgRequest withRequest(ReactionsCreateForTeamDiscussionInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}