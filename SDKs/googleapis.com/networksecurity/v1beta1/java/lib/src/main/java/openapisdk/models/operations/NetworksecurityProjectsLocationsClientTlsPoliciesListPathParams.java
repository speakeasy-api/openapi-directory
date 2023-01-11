package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsClientTlsPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public NetworksecurityProjectsLocationsClientTlsPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}