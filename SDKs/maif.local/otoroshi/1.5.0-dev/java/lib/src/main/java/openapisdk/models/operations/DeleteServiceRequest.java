package openapisdk.models.operations;



public class DeleteServiceRequest {
    public DeleteServicePathParams pathParams;
    public DeleteServiceRequest withPathParams(DeleteServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceSecurity security;
    public DeleteServiceRequest withSecurity(DeleteServiceSecurity security) {
        this.security = security;
        return this;
    }
}