package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerProjectsGetEffectiveOrgPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}