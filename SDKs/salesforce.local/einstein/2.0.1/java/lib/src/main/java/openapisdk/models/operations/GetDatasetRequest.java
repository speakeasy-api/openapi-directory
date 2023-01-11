package openapisdk.models.operations;



public class GetDatasetRequest {
    public GetDatasetPathParams pathParams;
    public GetDatasetRequest withPathParams(GetDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDatasetSecurity security;
    public GetDatasetRequest withSecurity(GetDatasetSecurity security) {
        this.security = security;
        return this;
    }
}