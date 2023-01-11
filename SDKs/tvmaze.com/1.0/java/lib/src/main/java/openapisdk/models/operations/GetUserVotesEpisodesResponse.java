package openapisdk.models.operations;



public class GetUserVotesEpisodesResponse {
    public String contentType;
    public GetUserVotesEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EpisodeVote[] episodeVotes;
    public GetUserVotesEpisodesResponse withEpisodeVotes(openapisdk.models.shared.EpisodeVote[] episodeVotes) {
        this.episodeVotes = episodeVotes;
        return this;
    }
    public Long statusCode;
    public GetUserVotesEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}