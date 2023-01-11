package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsQueuedResourcesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsQueuedResourcesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}