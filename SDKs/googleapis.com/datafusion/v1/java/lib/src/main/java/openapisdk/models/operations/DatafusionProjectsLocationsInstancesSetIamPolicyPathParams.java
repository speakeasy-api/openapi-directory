package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatafusionProjectsLocationsInstancesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}