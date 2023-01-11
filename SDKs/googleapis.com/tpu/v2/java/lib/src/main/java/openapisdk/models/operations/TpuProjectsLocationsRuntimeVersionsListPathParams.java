package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsRuntimeVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsRuntimeVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}