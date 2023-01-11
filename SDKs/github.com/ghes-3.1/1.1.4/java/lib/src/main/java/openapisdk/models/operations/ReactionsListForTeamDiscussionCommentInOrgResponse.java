package openapisdk.models.operations;



public class ReactionsListForTeamDiscussionCommentInOrgResponse {
    public String contentType;
    public ReactionsListForTeamDiscussionCommentInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForTeamDiscussionCommentInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForTeamDiscussionCommentInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForTeamDiscussionCommentInOrgResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
}