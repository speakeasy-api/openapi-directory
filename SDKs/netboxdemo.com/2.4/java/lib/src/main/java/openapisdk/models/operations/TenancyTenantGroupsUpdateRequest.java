package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsUpdateRequest {
    public TenancyTenantGroupsUpdatePathParams pathParams;
    public TenancyTenantGroupsUpdateRequest withPathParams(TenancyTenantGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TenantGroupInput request;
    public TenancyTenantGroupsUpdateRequest withRequest(openapisdk.models.shared.TenantGroupInput request) {
        this.request = request;
        return this;
    }
}