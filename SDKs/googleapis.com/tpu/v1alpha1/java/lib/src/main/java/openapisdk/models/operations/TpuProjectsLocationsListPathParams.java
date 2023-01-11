package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}