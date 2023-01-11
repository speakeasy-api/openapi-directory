package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationLicensesOverviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationLicensesOverviewPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}