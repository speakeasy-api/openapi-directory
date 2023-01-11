package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScrobbleEpisodesEpisodeIdRequest {
    public PutScrobbleEpisodesEpisodeIdPathParams pathParams;
    public PutScrobbleEpisodesEpisodeIdRequest withPathParams(PutScrobbleEpisodesEpisodeIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MarkedEpisodeInput request;
    public PutScrobbleEpisodesEpisodeIdRequest withRequest(openapisdk.models.shared.MarkedEpisodeInput request) {
        this.request = request;
        return this;
    }
}