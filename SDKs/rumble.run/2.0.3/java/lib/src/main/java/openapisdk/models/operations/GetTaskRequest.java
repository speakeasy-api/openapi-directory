package openapisdk.models.operations;



public class GetTaskRequest {
    public GetTaskPathParams pathParams;
    public GetTaskRequest withPathParams(GetTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaskSecurity security;
    public GetTaskRequest withSecurity(GetTaskSecurity security) {
        this.security = security;
        return this;
    }
}