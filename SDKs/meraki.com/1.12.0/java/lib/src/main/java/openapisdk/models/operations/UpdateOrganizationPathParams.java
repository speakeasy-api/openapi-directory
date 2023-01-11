package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}