package openapisdk.models.operations;



public class PutUserEpisodesEpisodeIdResponse {
    public String contentType;
    public PutUserEpisodesEpisodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarkedEpisode markedEpisode;
    public PutUserEpisodesEpisodeIdResponse withMarkedEpisode(openapisdk.models.shared.MarkedEpisode markedEpisode) {
        this.markedEpisode = markedEpisode;
        return this;
    }
    public Long statusCode;
    public PutUserEpisodesEpisodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}