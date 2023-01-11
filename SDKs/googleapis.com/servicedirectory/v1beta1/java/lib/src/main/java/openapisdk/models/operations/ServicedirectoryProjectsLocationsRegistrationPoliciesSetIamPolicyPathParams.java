package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}