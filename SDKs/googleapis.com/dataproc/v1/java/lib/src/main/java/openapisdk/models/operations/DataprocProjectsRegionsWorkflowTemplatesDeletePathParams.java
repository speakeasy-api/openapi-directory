package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DataprocProjectsRegionsWorkflowTemplatesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}