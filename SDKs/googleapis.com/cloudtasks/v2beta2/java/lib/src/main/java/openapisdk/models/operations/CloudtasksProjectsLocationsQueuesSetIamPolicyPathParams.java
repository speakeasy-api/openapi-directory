package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudtasksProjectsLocationsQueuesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}