package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}