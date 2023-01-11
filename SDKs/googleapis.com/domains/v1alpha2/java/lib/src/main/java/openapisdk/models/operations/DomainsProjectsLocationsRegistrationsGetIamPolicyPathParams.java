package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DomainsProjectsLocationsRegistrationsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}