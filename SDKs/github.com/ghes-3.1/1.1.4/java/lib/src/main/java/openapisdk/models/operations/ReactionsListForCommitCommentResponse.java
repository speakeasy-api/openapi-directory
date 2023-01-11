package openapisdk.models.operations;



public class ReactionsListForCommitCommentResponse {
    public String contentType;
    public ReactionsListForCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForCommitCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForCommitCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReactionsListForCommitCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForCommitCommentResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
    public ReactionsListForCommitComment415ApplicationJson reactionsListForCommitComment415ApplicationJSONObject;
    public ReactionsListForCommitCommentResponse withReactionsListForCommitComment415ApplicationJsonObject(ReactionsListForCommitComment415ApplicationJson reactionsListForCommitComment415ApplicationJSONObject) {
        this.reactionsListForCommitComment415ApplicationJSONObject = reactionsListForCommitComment415ApplicationJSONObject;
        return this;
    }
}