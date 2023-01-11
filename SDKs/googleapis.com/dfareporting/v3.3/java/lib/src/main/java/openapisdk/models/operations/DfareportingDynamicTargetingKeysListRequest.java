package openapisdk.models.operations;



public class DfareportingDynamicTargetingKeysListRequest {
    public DfareportingDynamicTargetingKeysListPathParams pathParams;
    public DfareportingDynamicTargetingKeysListRequest withPathParams(DfareportingDynamicTargetingKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDynamicTargetingKeysListQueryParams queryParams;
    public DfareportingDynamicTargetingKeysListRequest withQueryParams(DfareportingDynamicTargetingKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingDynamicTargetingKeysListSecurity security;
    public DfareportingDynamicTargetingKeysListRequest withSecurity(DfareportingDynamicTargetingKeysListSecurity security) {
        this.security = security;
        return this;
    }
}