package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DataprocProjectsRegionsWorkflowTemplatesUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}