package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationAdminsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationAdminsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}