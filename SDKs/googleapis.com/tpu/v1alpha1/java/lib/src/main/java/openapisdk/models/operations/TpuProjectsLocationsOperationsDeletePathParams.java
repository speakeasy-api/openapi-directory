package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}