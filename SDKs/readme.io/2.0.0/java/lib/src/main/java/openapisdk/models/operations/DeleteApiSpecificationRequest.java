package openapisdk.models.operations;



public class DeleteApiSpecificationRequest {
    public DeleteApiSpecificationPathParams pathParams;
    public DeleteApiSpecificationRequest withPathParams(DeleteApiSpecificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiSpecificationSecurity security;
    public DeleteApiSpecificationRequest withSecurity(DeleteApiSpecificationSecurity security) {
        this.security = security;
        return this;
    }
}