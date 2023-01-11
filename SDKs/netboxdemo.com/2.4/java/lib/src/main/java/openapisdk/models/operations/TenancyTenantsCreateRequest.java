package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTenantInput request;
    public TenancyTenantsCreateRequest withRequest(openapisdk.models.shared.WritableTenantInput request) {
        this.request = request;
        return this;
    }
}