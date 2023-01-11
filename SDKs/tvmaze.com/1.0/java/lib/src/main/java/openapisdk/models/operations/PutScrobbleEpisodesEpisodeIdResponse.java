package openapisdk.models.operations;



public class PutScrobbleEpisodesEpisodeIdResponse {
    public String contentType;
    public PutScrobbleEpisodesEpisodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarkedEpisode markedEpisode;
    public PutScrobbleEpisodesEpisodeIdResponse withMarkedEpisode(openapisdk.models.shared.MarkedEpisode markedEpisode) {
        this.markedEpisode = markedEpisode;
        return this;
    }
    public Long statusCode;
    public PutScrobbleEpisodesEpisodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}