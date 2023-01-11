package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}