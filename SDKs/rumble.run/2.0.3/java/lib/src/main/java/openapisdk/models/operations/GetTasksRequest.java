package openapisdk.models.operations;



public class GetTasksRequest {
    public GetTasksQueryParams queryParams;
    public GetTasksRequest withQueryParams(GetTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTasksSecurity security;
    public GetTasksRequest withSecurity(GetTasksSecurity security) {
        this.security = security;
        return this;
    }
}