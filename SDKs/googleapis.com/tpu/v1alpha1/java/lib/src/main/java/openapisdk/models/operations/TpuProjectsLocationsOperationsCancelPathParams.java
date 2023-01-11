package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}