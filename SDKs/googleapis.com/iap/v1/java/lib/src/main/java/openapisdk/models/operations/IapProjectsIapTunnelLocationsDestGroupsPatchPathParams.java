package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsIapTunnelLocationsDestGroupsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IapProjectsIapTunnelLocationsDestGroupsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}