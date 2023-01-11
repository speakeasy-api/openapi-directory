package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantsPartialUpdateRequest {
    public TenancyTenantsPartialUpdatePathParams pathParams;
    public TenancyTenantsPartialUpdateRequest withPathParams(TenancyTenantsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTenantInput request;
    public TenancyTenantsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableTenantInput request) {
        this.request = request;
        return this;
    }
}