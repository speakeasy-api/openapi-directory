package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}