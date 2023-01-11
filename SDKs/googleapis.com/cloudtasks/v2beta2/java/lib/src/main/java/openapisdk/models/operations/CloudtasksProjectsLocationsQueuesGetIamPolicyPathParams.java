package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudtasksProjectsLocationsQueuesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}