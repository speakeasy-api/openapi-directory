package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public String orgId;
    public UpdateAccountOrganizationPathParams withOrgId(String orgId) {
        this.orgId = orgId;
        return this;
    }
}