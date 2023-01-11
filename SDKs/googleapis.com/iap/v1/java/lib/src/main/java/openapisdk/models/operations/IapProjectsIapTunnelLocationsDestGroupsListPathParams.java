package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsIapTunnelLocationsDestGroupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IapProjectsIapTunnelLocationsDestGroupsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}