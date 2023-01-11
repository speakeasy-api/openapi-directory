package openapisdk.models.operations;



public class DeleteClientValidatorRequest {
    public DeleteClientValidatorPathParams pathParams;
    public DeleteClientValidatorRequest withPathParams(DeleteClientValidatorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteClientValidatorSecurity security;
    public DeleteClientValidatorRequest withSecurity(DeleteClientValidatorSecurity security) {
        this.security = security;
        return this;
    }
}