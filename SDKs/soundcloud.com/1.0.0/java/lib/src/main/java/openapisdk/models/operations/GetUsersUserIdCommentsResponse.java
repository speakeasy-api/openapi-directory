package openapisdk.models.operations;



public class GetUsersUserIdCommentsResponse {
    public openapisdk.models.shared.Comment[] commentsList;
    public GetUsersUserIdCommentsResponse withCommentsList(openapisdk.models.shared.Comment[] commentsList) {
        this.commentsList = commentsList;
        return this;
    }
    public String contentType;
    public GetUsersUserIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserIdCommentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}