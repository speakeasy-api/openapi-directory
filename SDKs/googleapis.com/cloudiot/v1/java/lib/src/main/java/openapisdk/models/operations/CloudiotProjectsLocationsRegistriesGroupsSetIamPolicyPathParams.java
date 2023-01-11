package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudiotProjectsLocationsRegistriesGroupsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}