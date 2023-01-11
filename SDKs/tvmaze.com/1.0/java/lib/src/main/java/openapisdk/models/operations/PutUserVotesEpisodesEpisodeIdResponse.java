package openapisdk.models.operations;



public class PutUserVotesEpisodesEpisodeIdResponse {
    public String contentType;
    public PutUserVotesEpisodesEpisodeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeVote episodeVote;
    public PutUserVotesEpisodesEpisodeIdResponse withEpisodeVote(openapisdk.models.shared.EpisodeVote episodeVote) {
        this.episodeVote = episodeVote;
        return this;
    }
    public Long statusCode;
    public PutUserVotesEpisodesEpisodeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}