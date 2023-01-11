package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworksecurityProjectsLocationsClientTlsPoliciesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}