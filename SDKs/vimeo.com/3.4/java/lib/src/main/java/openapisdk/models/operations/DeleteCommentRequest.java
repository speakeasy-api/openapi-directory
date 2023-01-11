package openapisdk.models.operations;



public class DeleteCommentRequest {
    public DeleteCommentPathParams pathParams;
    public DeleteCommentRequest withPathParams(DeleteCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCommentSecurity security;
    public DeleteCommentRequest withSecurity(DeleteCommentSecurity security) {
        this.security = security;
        return this;
    }
}