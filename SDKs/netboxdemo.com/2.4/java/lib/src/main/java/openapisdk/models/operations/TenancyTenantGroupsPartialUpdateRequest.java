package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsPartialUpdateRequest {
    public TenancyTenantGroupsPartialUpdatePathParams pathParams;
    public TenancyTenantGroupsPartialUpdateRequest withPathParams(TenancyTenantGroupsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TenantGroupInput request;
    public TenancyTenantGroupsPartialUpdateRequest withRequest(openapisdk.models.shared.TenantGroupInput request) {
        this.request = request;
        return this;
    }
}