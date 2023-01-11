package openapisdk.models.operations;



public class SplunkAssetSyncUpdatedJsonRequest {
    public SplunkAssetSyncUpdatedJsonQueryParams queryParams;
    public SplunkAssetSyncUpdatedJsonRequest withQueryParams(SplunkAssetSyncUpdatedJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SplunkAssetSyncUpdatedJsonSecurity security;
    public SplunkAssetSyncUpdatedJsonRequest withSecurity(SplunkAssetSyncUpdatedJsonSecurity security) {
        this.security = security;
        return this;
    }
}