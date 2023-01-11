package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}