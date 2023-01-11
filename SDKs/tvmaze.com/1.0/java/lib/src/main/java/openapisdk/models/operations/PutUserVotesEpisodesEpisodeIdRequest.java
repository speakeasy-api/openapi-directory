package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserVotesEpisodesEpisodeIdRequest {
    public PutUserVotesEpisodesEpisodeIdPathParams pathParams;
    public PutUserVotesEpisodesEpisodeIdRequest withPathParams(PutUserVotesEpisodesEpisodeIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EpisodeVoteInput request;
    public PutUserVotesEpisodesEpisodeIdRequest withRequest(openapisdk.models.shared.EpisodeVoteInput request) {
        this.request = request;
        return this;
    }
}