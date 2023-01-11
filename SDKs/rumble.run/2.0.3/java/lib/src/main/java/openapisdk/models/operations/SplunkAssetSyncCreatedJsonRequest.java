package openapisdk.models.operations;



public class SplunkAssetSyncCreatedJsonRequest {
    public SplunkAssetSyncCreatedJsonQueryParams queryParams;
    public SplunkAssetSyncCreatedJsonRequest withQueryParams(SplunkAssetSyncCreatedJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SplunkAssetSyncCreatedJsonSecurity security;
    public SplunkAssetSyncCreatedJsonRequest withSecurity(SplunkAssetSyncCreatedJsonSecurity security) {
        this.security = security;
        return this;
    }
}