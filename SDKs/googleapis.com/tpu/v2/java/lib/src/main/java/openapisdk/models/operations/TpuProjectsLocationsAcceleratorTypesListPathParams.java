package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsAcceleratorTypesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TpuProjectsLocationsAcceleratorTypesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}