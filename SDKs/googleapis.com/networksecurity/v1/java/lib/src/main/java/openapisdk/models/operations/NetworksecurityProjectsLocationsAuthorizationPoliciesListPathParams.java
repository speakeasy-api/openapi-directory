package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworksecurityProjectsLocationsAuthorizationPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}