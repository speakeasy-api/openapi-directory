package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVotesEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public GetUserVotesEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}