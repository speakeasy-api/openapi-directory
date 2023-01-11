package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSmApnsCertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSmApnsCertPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}