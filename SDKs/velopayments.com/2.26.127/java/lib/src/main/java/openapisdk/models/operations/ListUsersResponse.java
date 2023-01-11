package openapisdk.models.operations;



public class ListUsersResponse {
    public String contentType;
    public ListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedUserResponse pagedUserResponse;
    public ListUsersResponse withPagedUserResponse(openapisdk.models.shared.PagedUserResponse pagedUserResponse) {
        this.pagedUserResponse = pagedUserResponse;
        return this;
    }
    public Long statusCode;
    public ListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListUsersResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListUsersResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListUsersResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}