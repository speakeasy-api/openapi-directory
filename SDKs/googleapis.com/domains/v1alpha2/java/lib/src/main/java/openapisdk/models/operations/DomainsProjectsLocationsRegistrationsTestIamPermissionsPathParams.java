package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}