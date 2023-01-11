package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveOrganizationLicensesSeatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public MoveOrganizationLicensesSeatsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}