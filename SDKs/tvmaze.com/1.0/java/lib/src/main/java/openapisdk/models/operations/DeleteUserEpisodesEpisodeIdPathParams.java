package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public DeleteUserEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}