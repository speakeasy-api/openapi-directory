package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApplianceSecurityEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApplianceSecurityEventsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}