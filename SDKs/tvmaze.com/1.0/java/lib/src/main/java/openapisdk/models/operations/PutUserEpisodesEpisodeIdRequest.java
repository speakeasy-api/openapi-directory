package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserEpisodesEpisodeIdRequest {
    public PutUserEpisodesEpisodeIdPathParams pathParams;
    public PutUserEpisodesEpisodeIdRequest withPathParams(PutUserEpisodesEpisodeIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarkedEpisodeInput request;
    public PutUserEpisodesEpisodeIdRequest withRequest(openapisdk.models.shared.MarkedEpisodeInput request) {
        this.request = request;
        return this;
    }
}