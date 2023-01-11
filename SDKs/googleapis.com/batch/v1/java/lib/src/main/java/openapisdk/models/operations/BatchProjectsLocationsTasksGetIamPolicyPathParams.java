package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsTasksGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BatchProjectsLocationsTasksGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}