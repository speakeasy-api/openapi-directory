package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policy")
    public String policy;
    public DnsPoliciesDeletePathParams withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsPoliciesDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}