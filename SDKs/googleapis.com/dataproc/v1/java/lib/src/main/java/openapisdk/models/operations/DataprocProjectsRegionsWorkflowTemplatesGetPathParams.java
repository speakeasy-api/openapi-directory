package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DataprocProjectsRegionsWorkflowTemplatesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}