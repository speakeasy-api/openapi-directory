package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsTasksSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public BatchProjectsLocationsTasksSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}