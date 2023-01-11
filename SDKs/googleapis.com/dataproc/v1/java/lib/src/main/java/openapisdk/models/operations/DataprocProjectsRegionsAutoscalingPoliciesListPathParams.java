package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsAutoscalingPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DataprocProjectsRegionsAutoscalingPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}