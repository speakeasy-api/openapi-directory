package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}