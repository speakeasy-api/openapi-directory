package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountOrganizationExportTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public String orgId;
    public DeleteAccountOrganizationExportTokenPathParams withOrgId(String orgId) {
        this.orgId = orgId;
        return this;
    }
}