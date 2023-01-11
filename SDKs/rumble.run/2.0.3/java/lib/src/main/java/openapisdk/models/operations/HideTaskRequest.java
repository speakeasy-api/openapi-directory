package openapisdk.models.operations;



public class HideTaskRequest {
    public HideTaskPathParams pathParams;
    public HideTaskRequest withPathParams(HideTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public HideTaskSecurity security;
    public HideTaskRequest withSecurity(HideTaskSecurity security) {
        this.security = security;
        return this;
    }
}