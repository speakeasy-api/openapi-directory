package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IdsProjectsLocationsEndpointsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}