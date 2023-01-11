package openapisdk.models.operations;



public class GetUserVotesShowsShowIdResponse {
    public String contentType;
    public GetUserVotesShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowVote showVote;
    public GetUserVotesShowsShowIdResponse withShowVote(openapisdk.models.shared.ShowVote showVote) {
        this.showVote = showVote;
        return this;
    }
    public Long statusCode;
    public GetUserVotesShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}