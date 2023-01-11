package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTenantGroupInput request;
    public TenancyTenantGroupsCreateRequest withRequest(openapisdk.models.shared.WritableTenantGroupInput request) {
        this.request = request;
        return this;
    }
}