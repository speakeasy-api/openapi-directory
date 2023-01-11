package openapisdk.models.operations;



public class CorridorRequest {
    public CorridorPathParams pathParams;
    public CorridorRequest withPathParams(CorridorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CorridorSecurity security;
    public CorridorRequest withSecurity(CorridorSecurity security) {
        this.security = security;
        return this;
    }
}