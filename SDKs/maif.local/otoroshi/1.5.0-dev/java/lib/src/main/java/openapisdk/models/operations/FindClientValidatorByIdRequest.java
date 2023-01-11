package openapisdk.models.operations;



public class FindClientValidatorByIdRequest {
    public FindClientValidatorByIdPathParams pathParams;
    public FindClientValidatorByIdRequest withPathParams(FindClientValidatorByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindClientValidatorByIdSecurity security;
    public FindClientValidatorByIdRequest withSecurity(FindClientValidatorByIdSecurity security) {
        this.security = security;
        return this;
    }
}