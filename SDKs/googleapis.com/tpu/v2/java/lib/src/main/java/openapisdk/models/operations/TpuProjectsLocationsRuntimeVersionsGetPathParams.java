package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsRuntimeVersionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsRuntimeVersionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}