package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TpuProjectsLocationsTensorflowVersionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TpuProjectsLocationsTensorflowVersionsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}