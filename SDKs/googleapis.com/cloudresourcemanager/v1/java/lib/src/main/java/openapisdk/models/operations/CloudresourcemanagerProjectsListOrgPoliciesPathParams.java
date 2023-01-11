package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsListOrgPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerProjectsListOrgPoliciesPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}