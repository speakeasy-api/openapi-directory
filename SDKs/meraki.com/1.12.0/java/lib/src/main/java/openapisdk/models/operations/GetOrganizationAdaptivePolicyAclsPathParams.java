package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationAdaptivePolicyAclsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationAdaptivePolicyAclsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}