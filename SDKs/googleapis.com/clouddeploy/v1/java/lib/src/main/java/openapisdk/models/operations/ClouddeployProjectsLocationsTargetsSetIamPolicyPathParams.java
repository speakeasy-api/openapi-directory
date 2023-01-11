package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ClouddeployProjectsLocationsTargetsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}