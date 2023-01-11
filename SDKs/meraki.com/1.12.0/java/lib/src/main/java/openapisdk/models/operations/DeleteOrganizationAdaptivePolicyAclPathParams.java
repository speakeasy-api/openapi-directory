package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationAdaptivePolicyAclPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteOrganizationAdaptivePolicyAclPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationAdaptivePolicyAclPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}