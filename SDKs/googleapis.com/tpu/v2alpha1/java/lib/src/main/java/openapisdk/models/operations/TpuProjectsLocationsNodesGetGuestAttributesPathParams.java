package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesGetGuestAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsNodesGetGuestAttributesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}