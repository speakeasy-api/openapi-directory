package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdsProjectsLocationsEndpointsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IdsProjectsLocationsEndpointsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}