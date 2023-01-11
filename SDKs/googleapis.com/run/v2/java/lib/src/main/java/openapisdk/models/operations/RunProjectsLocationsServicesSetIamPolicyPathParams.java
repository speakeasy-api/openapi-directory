package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public RunProjectsLocationsServicesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}