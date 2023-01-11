package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsTargetsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ClouddeployProjectsLocationsTargetsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}