package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TenantGroupInput request;
    public TenancyTenantGroupsCreateRequest withRequest(openapisdk.models.shared.TenantGroupInput request) {
        this.request = request;
        return this;
    }
}