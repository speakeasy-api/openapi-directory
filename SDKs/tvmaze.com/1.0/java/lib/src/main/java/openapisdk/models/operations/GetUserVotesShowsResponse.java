package openapisdk.models.operations;



public class GetUserVotesShowsResponse {
    public String contentType;
    public GetUserVotesShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowVote[] showVotes;
    public GetUserVotesShowsResponse withShowVotes(openapisdk.models.shared.ShowVote[] showVotes) {
        this.showVotes = showVotes;
        return this;
    }
    public Long statusCode;
    public GetUserVotesShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}