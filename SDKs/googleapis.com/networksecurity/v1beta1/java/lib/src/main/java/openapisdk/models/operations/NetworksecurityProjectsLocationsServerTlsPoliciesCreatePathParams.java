package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworksecurityProjectsLocationsServerTlsPoliciesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}