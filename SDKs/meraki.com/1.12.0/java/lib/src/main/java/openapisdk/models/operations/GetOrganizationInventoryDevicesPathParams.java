package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationInventoryDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationInventoryDevicesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}