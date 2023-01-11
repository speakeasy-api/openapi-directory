package openapisdk.models.operations;



public class RemoveServiceRequest {
    public RemoveServicePathParams pathParams;
    public RemoveServiceRequest withPathParams(RemoveServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveServiceSecurity security;
    public RemoveServiceRequest withSecurity(RemoveServiceSecurity security) {
        this.security = security;
        return this;
    }
}