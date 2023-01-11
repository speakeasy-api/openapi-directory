package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}