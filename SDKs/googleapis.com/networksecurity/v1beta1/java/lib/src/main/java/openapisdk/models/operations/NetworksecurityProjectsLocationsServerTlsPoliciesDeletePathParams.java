package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworksecurityProjectsLocationsServerTlsPoliciesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworksecurityProjectsLocationsServerTlsPoliciesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}