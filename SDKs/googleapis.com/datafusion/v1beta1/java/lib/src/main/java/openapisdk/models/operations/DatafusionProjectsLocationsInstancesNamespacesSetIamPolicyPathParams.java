package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatafusionProjectsLocationsInstancesNamespacesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}