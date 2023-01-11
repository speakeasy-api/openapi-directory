package openapisdk.models.operations;



public class CheckKeyUsabilityRequest {
    public CheckKeyUsabilityPathParams pathParams;
    public CheckKeyUsabilityRequest withPathParams(CheckKeyUsabilityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CheckKeyUsabilityQueryParams queryParams;
    public CheckKeyUsabilityRequest withQueryParams(CheckKeyUsabilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CheckKeyUsabilitySecurity security;
    public CheckKeyUsabilityRequest withSecurity(CheckKeyUsabilitySecurity security) {
        this.security = security;
        return this;
    }
}