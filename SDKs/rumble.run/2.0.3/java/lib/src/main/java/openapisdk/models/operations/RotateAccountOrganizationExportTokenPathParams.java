package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotateAccountOrganizationExportTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public String orgId;
    public RotateAccountOrganizationExportTokenPathParams withOrgId(String orgId) {
        this.orgId = orgId;
        return this;
    }
}