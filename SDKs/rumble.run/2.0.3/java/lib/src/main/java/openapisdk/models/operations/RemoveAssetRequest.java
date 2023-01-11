package openapisdk.models.operations;



public class RemoveAssetRequest {
    public RemoveAssetPathParams pathParams;
    public RemoveAssetRequest withPathParams(RemoveAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveAssetSecurity security;
    public RemoveAssetRequest withSecurity(RemoveAssetSecurity security) {
        this.security = security;
        return this;
    }
}