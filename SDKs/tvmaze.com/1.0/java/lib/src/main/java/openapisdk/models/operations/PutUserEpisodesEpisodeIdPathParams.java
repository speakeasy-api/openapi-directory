package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public PutUserEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}