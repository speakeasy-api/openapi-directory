package openapisdk.models.operations;



public class DiasporaRequest {
    public DiasporaPathParams pathParams;
    public DiasporaRequest withPathParams(DiasporaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiasporaSecurity security;
    public DiasporaRequest withSecurity(DiasporaSecurity security) {
        this.security = security;
        return this;
    }
}