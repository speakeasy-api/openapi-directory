package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworksecurityProjectsLocationsServerTlsPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}