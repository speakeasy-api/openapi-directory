package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}