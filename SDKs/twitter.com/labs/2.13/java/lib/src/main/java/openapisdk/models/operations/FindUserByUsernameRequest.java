package openapisdk.models.operations;



public class FindUserByUsernameRequest {
    public FindUserByUsernamePathParams pathParams;
    public FindUserByUsernameRequest withPathParams(FindUserByUsernamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindUserByUsernameQueryParams queryParams;
    public FindUserByUsernameRequest withQueryParams(FindUserByUsernameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}