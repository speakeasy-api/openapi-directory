package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsNodesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsNodesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}