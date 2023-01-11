package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public CloneOrganizationPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}