package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policy")
    public String policy;
    public DnsPoliciesPatchPathParams withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsPoliciesPatchPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}