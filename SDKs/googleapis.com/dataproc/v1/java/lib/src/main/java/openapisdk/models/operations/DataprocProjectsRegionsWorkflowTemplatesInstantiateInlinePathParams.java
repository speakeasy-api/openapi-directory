package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiateInlinePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}