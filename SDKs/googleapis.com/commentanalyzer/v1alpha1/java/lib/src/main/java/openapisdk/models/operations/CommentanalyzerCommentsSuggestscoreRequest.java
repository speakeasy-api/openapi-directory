package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommentanalyzerCommentsSuggestscoreRequest {
    public CommentanalyzerCommentsSuggestscoreQueryParams queryParams;
    public CommentanalyzerCommentsSuggestscoreRequest withQueryParams(CommentanalyzerCommentsSuggestscoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SuggestCommentScoreRequest request;
    public CommentanalyzerCommentsSuggestscoreRequest withRequest(openapisdk.models.shared.SuggestCommentScoreRequest request) {
        this.request = request;
        return this;
    }
    public CommentanalyzerCommentsSuggestscoreSecurity security;
    public CommentanalyzerCommentsSuggestscoreRequest withSecurity(CommentanalyzerCommentsSuggestscoreSecurity security) {
        this.security = security;
        return this;
    }
}