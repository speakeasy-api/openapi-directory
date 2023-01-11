package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworksecurityProjectsLocationsServerTlsPoliciesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}