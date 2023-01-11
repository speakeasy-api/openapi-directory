package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public GetUserEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}