package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public PrivatecaProjectsLocationsReusableConfigsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}