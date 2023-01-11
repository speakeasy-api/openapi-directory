package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAccountOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public String orgId;
    public RemoveAccountOrganizationPathParams withOrgId(String orgId) {
        this.orgId = orgId;
        return this;
    }
}