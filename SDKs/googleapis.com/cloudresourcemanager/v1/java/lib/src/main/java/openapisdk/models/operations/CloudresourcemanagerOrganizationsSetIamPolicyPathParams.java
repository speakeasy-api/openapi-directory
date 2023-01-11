package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerOrganizationsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}