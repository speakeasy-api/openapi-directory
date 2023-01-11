package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentanalyzerCommentsAnalyzeRequest {
    public CommentanalyzerCommentsAnalyzeQueryParams queryParams;
    public CommentanalyzerCommentsAnalyzeRequest withQueryParams(CommentanalyzerCommentsAnalyzeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AnalyzeCommentRequest request;
    public CommentanalyzerCommentsAnalyzeRequest withRequest(openapisdk.models.shared.AnalyzeCommentRequest request) {
        this.request = request;
        return this;
    }
    public CommentanalyzerCommentsAnalyzeSecurity security;
    public CommentanalyzerCommentsAnalyzeRequest withSecurity(CommentanalyzerCommentsAnalyzeSecurity security) {
        this.security = security;
        return this;
    }
}