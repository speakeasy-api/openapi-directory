package openapisdk.models.operations;



public class FindUserByIdRequest {
    public FindUserByIdPathParams pathParams;
    public FindUserByIdRequest withPathParams(FindUserByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindUserByIdQueryParams queryParams;
    public FindUserByIdRequest withQueryParams(FindUserByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}