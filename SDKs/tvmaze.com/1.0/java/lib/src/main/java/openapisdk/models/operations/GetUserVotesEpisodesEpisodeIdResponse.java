package openapisdk.models.operations;



public class GetUserVotesEpisodesEpisodeIdResponse {
    public String contentType;
    public GetUserVotesEpisodesEpisodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeVote episodeVote;
    public GetUserVotesEpisodesEpisodeIdResponse withEpisodeVote(openapisdk.models.shared.EpisodeVote episodeVote) {
        this.episodeVote = episodeVote;
        return this;
    }
    public Long statusCode;
    public GetUserVotesEpisodesEpisodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}