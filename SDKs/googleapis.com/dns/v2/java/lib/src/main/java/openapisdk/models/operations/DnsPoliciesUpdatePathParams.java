package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DnsPoliciesUpdatePathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=policy")
    public String policy;
    public DnsPoliciesUpdatePathParams withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsPoliciesUpdatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}