package openapisdk.models.operations;



public class CommentanalyzerCommentsSuggestscoreResponse {
    public String contentType;
    public CommentanalyzerCommentsSuggestscoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CommentanalyzerCommentsSuggestscoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuggestCommentScoreResponse suggestCommentScoreResponse;
    public CommentanalyzerCommentsSuggestscoreResponse withSuggestCommentScoreResponse(openapisdk.models.shared.SuggestCommentScoreResponse suggestCommentScoreResponse) {
        this.suggestCommentScoreResponse = suggestCommentScoreResponse;
        return this;
    }
}