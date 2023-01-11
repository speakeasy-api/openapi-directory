package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatafusionProjectsLocationsRemoveIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatafusionProjectsLocationsRemoveIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}