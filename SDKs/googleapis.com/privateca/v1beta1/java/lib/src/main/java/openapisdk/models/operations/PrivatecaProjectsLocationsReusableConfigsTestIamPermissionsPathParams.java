package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public PrivatecaProjectsLocationsReusableConfigsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}