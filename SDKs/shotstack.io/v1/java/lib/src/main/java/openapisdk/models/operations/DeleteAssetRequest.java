package openapisdk.models.operations;



public class DeleteAssetRequest {
    public DeleteAssetPathParams pathParams;
    public DeleteAssetRequest withPathParams(DeleteAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAssetSecurity security;
    public DeleteAssetRequest withSecurity(DeleteAssetSecurity security) {
        this.security = security;
        return this;
    }
}