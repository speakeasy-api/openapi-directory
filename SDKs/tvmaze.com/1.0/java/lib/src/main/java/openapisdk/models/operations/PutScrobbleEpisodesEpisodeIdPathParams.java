package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScrobbleEpisodesEpisodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=episode_id")
    public Long episodeId;
    public PutScrobbleEpisodesEpisodeIdPathParams withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
}