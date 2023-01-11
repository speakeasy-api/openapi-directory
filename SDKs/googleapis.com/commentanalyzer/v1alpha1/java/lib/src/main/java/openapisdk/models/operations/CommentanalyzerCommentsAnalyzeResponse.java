package openapisdk.models.operations;



public class CommentanalyzerCommentsAnalyzeResponse {
    public openapisdk.models.shared.AnalyzeCommentResponse analyzeCommentResponse;
    public CommentanalyzerCommentsAnalyzeResponse withAnalyzeCommentResponse(openapisdk.models.shared.AnalyzeCommentResponse analyzeCommentResponse) {
        this.analyzeCommentResponse = analyzeCommentResponse;
        return this;
    }
    public String contentType;
    public CommentanalyzerCommentsAnalyzeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CommentanalyzerCommentsAnalyzeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}