package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}