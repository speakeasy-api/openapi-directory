package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}