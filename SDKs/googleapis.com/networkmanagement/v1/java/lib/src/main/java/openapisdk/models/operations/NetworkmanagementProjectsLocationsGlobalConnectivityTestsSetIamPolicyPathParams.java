package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}