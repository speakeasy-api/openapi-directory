package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserVotesShowsShowIdRequest {
    public PutUserVotesShowsShowIdPathParams pathParams;
    public PutUserVotesShowsShowIdRequest withPathParams(PutUserVotesShowsShowIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShowVoteInput request;
    public PutUserVotesShowsShowIdRequest withRequest(openapisdk.models.shared.ShowVoteInput request) {
        this.request = request;
        return this;
    }
}