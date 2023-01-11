package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationDevicesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}