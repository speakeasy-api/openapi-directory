package openapisdk.models.operations;



public class PutUserVotesShowsShowIdResponse {
    public String contentType;
    public PutUserVotesShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowVote showVote;
    public PutUserVotesShowsShowIdResponse withShowVote(openapisdk.models.shared.ShowVote showVote) {
        this.showVote = showVote;
        return this;
    }
    public Long statusCode;
    public PutUserVotesShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}