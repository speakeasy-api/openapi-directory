package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsSetOrgPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerProjectsSetOrgPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}