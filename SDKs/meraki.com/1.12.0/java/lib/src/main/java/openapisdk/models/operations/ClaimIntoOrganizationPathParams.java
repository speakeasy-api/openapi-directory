package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimIntoOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public ClaimIntoOrganizationPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}