package openapisdk.models.operations;



public class ServicesForALineRequest {
    public ServicesForALinePathParams pathParams;
    public ServicesForALineRequest withPathParams(ServicesForALinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicesForALineSecurity security;
    public ServicesForALineRequest withSecurity(ServicesForALineSecurity security) {
        this.security = security;
        return this;
    }
}