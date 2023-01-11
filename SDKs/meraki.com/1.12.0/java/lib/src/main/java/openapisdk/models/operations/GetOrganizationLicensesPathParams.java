package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationLicensesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationLicensesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}