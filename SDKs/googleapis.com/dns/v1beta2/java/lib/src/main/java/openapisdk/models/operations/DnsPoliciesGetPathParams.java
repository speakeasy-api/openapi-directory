package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policy")
    public String policy;
    public DnsPoliciesGetPathParams withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsPoliciesGetPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}