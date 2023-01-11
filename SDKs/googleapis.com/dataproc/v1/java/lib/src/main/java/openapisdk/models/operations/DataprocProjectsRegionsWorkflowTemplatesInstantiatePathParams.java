package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}