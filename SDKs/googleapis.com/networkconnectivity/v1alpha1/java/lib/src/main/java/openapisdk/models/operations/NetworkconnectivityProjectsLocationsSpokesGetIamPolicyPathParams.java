package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkconnectivityProjectsLocationsSpokesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworkconnectivityProjectsLocationsSpokesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}