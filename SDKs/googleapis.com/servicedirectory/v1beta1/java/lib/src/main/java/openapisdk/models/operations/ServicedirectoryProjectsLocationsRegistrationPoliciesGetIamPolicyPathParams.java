package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}