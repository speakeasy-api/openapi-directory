package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserVotesEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public PutUserVotesEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}