package openapisdk.models.operations;



public class GetImageCollectionRequest {
    public GetImageCollectionPathParams pathParams;
    public GetImageCollectionRequest withPathParams(GetImageCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImageCollectionQueryParams queryParams;
    public GetImageCollectionRequest withQueryParams(GetImageCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageCollectionSecurity security;
    public GetImageCollectionRequest withSecurity(GetImageCollectionSecurity security) {
        this.security = security;
        return this;
    }
}