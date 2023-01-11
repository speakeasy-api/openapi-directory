package openapisdk.models.operations;



public class StopTaskRequest {
    public StopTaskPathParams pathParams;
    public StopTaskRequest withPathParams(StopTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopTaskSecurity security;
    public StopTaskRequest withSecurity(StopTaskSecurity security) {
        this.security = security;
        return this;
    }
}