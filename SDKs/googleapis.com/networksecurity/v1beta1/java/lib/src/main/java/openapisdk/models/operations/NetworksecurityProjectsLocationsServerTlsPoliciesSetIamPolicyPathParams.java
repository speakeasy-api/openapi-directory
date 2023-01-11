package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}