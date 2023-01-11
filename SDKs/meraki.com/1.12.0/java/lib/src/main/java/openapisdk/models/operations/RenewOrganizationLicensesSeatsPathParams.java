package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenewOrganizationLicensesSeatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public RenewOrganizationLicensesSeatsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}