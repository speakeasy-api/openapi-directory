package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApplianceUplinkStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApplianceUplinkStatusesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}