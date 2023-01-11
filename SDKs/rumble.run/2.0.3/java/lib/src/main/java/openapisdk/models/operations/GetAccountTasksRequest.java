package openapisdk.models.operations;



public class GetAccountTasksRequest {
    public GetAccountTasksQueryParams queryParams;
    public GetAccountTasksRequest withQueryParams(GetAccountTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountTasksSecurity security;
    public GetAccountTasksRequest withSecurity(GetAccountTasksSecurity security) {
        this.security = security;
        return this;
    }
}