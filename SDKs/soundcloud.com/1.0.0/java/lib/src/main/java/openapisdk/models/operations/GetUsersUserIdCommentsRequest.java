package openapisdk.models.operations;



public class GetUsersUserIdCommentsRequest {
    public GetUsersUserIdCommentsPathParams pathParams;
    public GetUsersUserIdCommentsRequest withPathParams(GetUsersUserIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersUserIdCommentsQueryParams queryParams;
    public GetUsersUserIdCommentsRequest withQueryParams(GetUsersUserIdCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsersUserIdCommentsSecurity security;
    public GetUsersUserIdCommentsRequest withSecurity(GetUsersUserIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}