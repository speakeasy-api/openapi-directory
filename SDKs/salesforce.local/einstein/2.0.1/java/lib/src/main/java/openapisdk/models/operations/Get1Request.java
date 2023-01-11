package openapisdk.models.operations;



public class Get1Request {
    public Get1PathParams pathParams;
    public Get1Request withPathParams(Get1PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Get1Security security;
    public Get1Request withSecurity(Get1Security security) {
        this.security = security;
        return this;
    }
}