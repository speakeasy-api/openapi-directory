package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsIapTunnelLocationsDestGroupsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IapProjectsIapTunnelLocationsDestGroupsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}