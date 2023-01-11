package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveOrganizationLicensesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public MoveOrganizationLicensesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}