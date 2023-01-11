package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public String orgId;
    public GetAccountOrganizationPathParams withOrgId(String orgId) {
        this.orgId = orgId;
        return this;
    }
}