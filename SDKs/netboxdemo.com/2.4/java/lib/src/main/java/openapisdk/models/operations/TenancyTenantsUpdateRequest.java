package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantsUpdateRequest {
    public TenancyTenantsUpdatePathParams pathParams;
    public TenancyTenantsUpdateRequest withPathParams(TenancyTenantsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTenantInput request;
    public TenancyTenantsUpdateRequest withRequest(openapisdk.models.shared.WritableTenantInput request) {
        this.request = request;
        return this;
    }
}