package openapisdk.models.operations;



public class GetProductTypesRequest {
    public GetProductTypesPathParams pathParams;
    public GetProductTypesRequest withPathParams(GetProductTypesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProductTypesSecurity security;
    public GetProductTypesRequest withSecurity(GetProductTypesSecurity security) {
        this.security = security;
        return this;
    }
}