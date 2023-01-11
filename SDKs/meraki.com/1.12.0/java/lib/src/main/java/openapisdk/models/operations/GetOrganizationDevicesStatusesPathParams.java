package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationDevicesStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationDevicesStatusesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}