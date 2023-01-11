package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsQueuedResourcesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsQueuedResourcesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}