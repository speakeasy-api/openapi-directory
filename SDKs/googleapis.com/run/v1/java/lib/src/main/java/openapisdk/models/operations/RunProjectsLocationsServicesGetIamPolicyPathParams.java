package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public RunProjectsLocationsServicesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}