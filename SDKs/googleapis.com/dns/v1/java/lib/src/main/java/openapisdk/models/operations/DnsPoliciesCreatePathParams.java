package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public DnsPoliciesCreatePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}