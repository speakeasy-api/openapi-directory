package openapisdk.models.operations;



public class FindGlobalJwtVerifiersByIdRequest {
    public FindGlobalJwtVerifiersByIdPathParams pathParams;
    public FindGlobalJwtVerifiersByIdRequest withPathParams(FindGlobalJwtVerifiersByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindGlobalJwtVerifiersByIdSecurity security;
    public FindGlobalJwtVerifiersByIdRequest withSecurity(FindGlobalJwtVerifiersByIdSecurity security) {
        this.security = security;
        return this;
    }
}