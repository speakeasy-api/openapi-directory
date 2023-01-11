package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DataprocProjectsRegionsWorkflowTemplatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}