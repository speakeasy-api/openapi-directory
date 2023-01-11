package openapisdk.models.operations;



public class GetUserEpisodesEpisodeIdResponse {
    public String contentType;
    public GetUserEpisodesEpisodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarkedEpisode markedEpisode;
    public GetUserEpisodesEpisodeIdResponse withMarkedEpisode(openapisdk.models.shared.MarkedEpisode markedEpisode) {
        this.markedEpisode = markedEpisode;
        return this;
    }
    public Long statusCode;
    public GetUserEpisodesEpisodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}