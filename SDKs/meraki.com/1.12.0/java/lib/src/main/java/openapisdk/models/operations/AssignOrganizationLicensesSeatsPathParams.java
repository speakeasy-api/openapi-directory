package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignOrganizationLicensesSeatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public AssignOrganizationLicensesSeatsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}